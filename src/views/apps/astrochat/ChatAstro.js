import React from "react";

import { Col, Container, Row } from "reactstrap";
import "../../../assets/scss/pages/astrochat.scss";
import Buyimg from "../../../assets/img/boy-img.png";

import ChatAppList from "./ChatAppList";
import ChatAppMassage from "./ChatAppMassage";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import axiosConfig from "../../../axiosConfig";

import swal from "sweetalert";

class ChatApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userChatList: [],
      Users: {},
      userId: "",
      astroId: "",
      msg: "",
      roomId: "",
      roomChatData: [],
      time: {},
      seconds: 60 * 15,
      reciver: "",
      minutes: 15,
      indexValue: 0,
    };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  componentDidMount() {
    let astroId = localStorage.getItem("astroId");

    // let timeLeftVar = ''
    if (JSON.parse(localStorage.getItem("minute"))) {
      let minute = JSON.parse(localStorage.getItem("minute"));
      this.setState({ minutes: minute, seconds: minute * 60 });
      this.startTimer();
      this.secondsToTime(minute * 60);
    }

    console.log(astroId);
    axiosConfig
      .get(`/user/astrogetRoomid/${astroId}`)
      .then((response) => {
        // console.log("@@!!!", response?.data?.data);
        if (response.data.status === true) {
          this.setState({
            userChatList: response?.data?.data,
            roomId: response?.data?.data?.roomid,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));
    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);
    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);
    let obj = {
      h: hours,
      m: minutes,
      s: seconds,
    };
    return obj;
  }

  startTimer() {
    if (this.timer === 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // let astroid = JSON.parse(localStorage.getItem('astroid'))
    // Remove one second, set state so a re-render happens.
    let seconds =
      this.state.seconds !== 0 ? this.state.seconds - 1 : alert("out time");
    // this.history.redirect(`/astrologerdetail/${astroid}`)
    // <Redirect to={'/chatApp/astrologerdetail/' + astroid} />
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
      //    if (seconds = 0 && this.state.seconds > 0) {
      //   this.timer = setInterval(this.countDown, 1000);
      // }
    });

    // Check if we're at zero.
    if (seconds === 0) {
      clearInterval(this.timer);
    }
  }

  getChatRoomId = async (user, i) => {
    console.log("wwww", user);
    this.setState({ Users: user });
    sessionStorage.setItem("AstroRoomID", user?.roomid);
    let userIds = [user?.userid?._id];
    // this.getAstroMessage();
    this.setState({
      userId: user?.userid?._id,
      roomId: user?.roomid,
      indexValue: i,
      astroId: user?.astroid?._id,
    });
    await axiosConfig
      .get(`/user/allchatwithAstro/${user?.astroid?._id}`)
      .then((response) => {
        console.log(response?.data?.data);
        if (response.data.status === true) {
          console.log("AstroChat", response?.data.data);

          let filteredArray = response?.data?.data.filter(function (item) {
            return (
              userIds.indexOf(item?.userid?._id || item?.reciver?._id) > -1
            );
          });

          this.setState({ roomChatData: filteredArray });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // getAstroMessage = () => {
  //   let AstroRoomID = sessionStorage.getItem("AstroRoomID");
  //   // console.log("AstroRoomID", AstroRoomID);
  //   setInterval(() => {
  //     console.log("AstroRoomID", AstroRoomID);

  //     axiosConfig
  //       .get(`/user/allchatwithAstro/${AstroRoomID}`)
  //       .then((response) => {
  //         console.log(response.data);
  //         if (response.data.status === true) {
  //           console.log("AstroChat", response?.data.data);

  //           // let filteredArray = response?.data?.data.filter(function (item) {
  //           //   return (
  //           //     this.state.Users?.indexOf(
  //           //       item?.userid?._id || item?.reciver?._id
  //           //     ) > -1
  //           //   );
  //           // });

  //           // this.setState({ roomChatData: filteredArray });
  //         }
  //       })
  //       .catch((error) => {
  //         console.log(error.response.data);
  //       });
  //   }, 10000);
  // };
  submitHandler = async (e) => {
    e.preventDefault();

    if (this.state.msg !== "") {
      let obj = {
        reciver: this.state.userId,
        msg: this.state.msg,
      };
      let userIds = [this.state.userId];
      await axiosConfig
        .post(`/user/add_chatroom/${this.state.astroId}`, obj)
        .then(async (response) => {
          console.log("hdfkjh", response.data.status);
          if (response.data.status === true) {
            this.setState({ msg: "" });
            await axiosConfig
              .get(`/user/allchatwithAstro/${this.state.astroId}`)
              .then((response1) => {
                console.log(response1?.data?.data);
                if (response1.data.status === true) {
                  let filteredArray = response1?.data?.data.filter(function (
                    item
                  ) {
                    return (
                      userIds.indexOf(item?.userid?._id || item?.reciver?._id) >
                      -1
                    );
                  });

                  this.setState({ roomChatData: filteredArray });
                }
              })
              .catch((error) => {
                console.log(error);
              });
          }
        })

        .catch((error) => {
          console.log(error);
        });
    } else swal("Alert", "Input field is blank. Add Some Value");
  };

  handleChange = (e) => {
    this.setState({
      msg: e.target.value,
    });
  };

  render() {
    const { indexValue } = this.state;
    return (
      <div>
        <Breadcrumbs
          breadCrumbTitle="Chat"
          breadCrumbParent="Home"
          breadCrumbActive="Chat"
        />

        <section className="">
          <Container>
            <Row>
              <Col lg="4">
                <div class="mymessagehead">
                  <div class="mymsgsubhead">
                    <h1 class="title mx-1 mb-2">My messages</h1>
                    <ChatAppList
                      userChatList={
                        this.state.userChatList.length
                          ? this.state.userChatList
                          : []
                      }
                      getChatRoomId={(user, i) => this.getChatRoomId(user, i)}
                    />
                  </div>
                </div>
              </Col>
              <Col lg="8">
                <div class="app rt-chat">
                  <div class="messages">
                    <div className="chat-header">
                      <p>
                        <span>
                          <img
                            src={
                              this.state.roomChatData.length > 0
                                ? this.state.userChatList[indexValue]?.userid
                                    ?.userimg[0]
                                : Buyimg
                            }
                            className="app-img"
                            alt=""
                          />
                        </span>
                        {this.state.roomChatData.length > 0
                          ? this.state.userChatList[indexValue]?.userid
                              ?.fullname
                          : null}
                      </p>
                      <span className="appchattimer">
                        {this.state.time.m} :{this.state.time.s}
                      </span>
                    </div>
                    <div class="messages-history">
                      <ChatAppMassage
                        roomChatData={
                          this.state.roomChatData.length > 0
                            ? this.state.roomChatData
                            : []
                        }
                      />
                    </div>
                    <form class="messages-inputs">
                      <input
                        type="text"
                        placeholder="Send a message"
                        onChange={(e) => {
                          this.handleChange(e);
                        }}
                        value={this.state.msg}
                        defaultValue={""}
                      />
                      <button
                        onClick={(e) =>
                          this.submitHandler(
                            e,
                            this.state.astroId,
                            this.state.userId
                          )
                        }
                      >
                        <i class="material-icons">Send</i>
                      </button>
                    </form>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default ChatApp;
