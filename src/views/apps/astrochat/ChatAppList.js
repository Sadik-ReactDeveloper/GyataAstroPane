// import React from "react";

// import "../../../assets/scss/pages/astrochat.scss";
// import userprofile from "../../../assets/img/userprofile.png";
// class ChatAppList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userChatList: this.props.userChatList,
//       roomid: "",
//     };
//   }

//   render() {
//     const { userChatList } = this.props;

//     return (
//       <ul>
//         {userChatList.length
//           ? userChatList.map((user, i) => {
//               console.log("User", user);
//               return (
//                 <li
//                   key={user._id}
//                   className="userList"
//                   onClick={() => this.props.getChatRoomId(user, i)}
//                 >
//                   <div className="imglf">
//                     {user.userid?.userimg[0] ? (
//                       <img
//                         src={user.userid?.userimg[0]}
//                         className="app-img"
//                         alt=""
//                       />
//                     ) : (
//                       <img src={userprofile} className="app-img" alt="" />
//                     )}
//                   </div>
//                   <div className="lst-con">
//                     <h5>{user.userid?.fullname}</h5>
//                     <p>{user.msg}</p>
//                   </div>
//                 </li>
//               );
//             })
//           : null}
//       </ul>
//     );
//   }
// }

// export default ChatAppList;
import React from "react";

import "../../../assets/scss/pages/astrochat.scss";
import { CloudLightning } from "react-feather";

class ChatAppList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Index: "",
      connecting_usrid: "",
      userChatList: this.props?.userChatList,
      roomid: "",
    };
  }
  componentDidMount() {
    let currentuserid = localStorage.getItem("CurrentChat_userid");
    this.setState({ connecting_usrid: currentuserid });
  }

  render() {
    const { userChatList } = this.props;

    return (
      <ul
        className="listofchat"
        style={{ listStyle: "none", marginLeft: "none", cursor: "pointer" }}
      >
        {userChatList && userChatList?.length
          ? userChatList?.map((user, i) => {
              if (this.state.connecting_usrid === user?.userid?._id) {
                return (
                  <li
                    key={i}
                    className="newmainheaading"
                    style={{
                      backgroundColor: `${
                        this.state.connecting_usrid === user?.userid?._id
                          ? "#ef9014"
                          : "white"
                      }`,
                    }}
                    onClick={() => {
                      this.props.getChatRoomId(user, i);
                      this.setState({ Index: i });
                    }}
                  >
                    <div
                      className=" userprofile"
                      onClick={() => this.props.getChatRoomId(user, i)}
                    >
                      <img
                        src={user?.userid?.userimg[0]}
                        className="app-img"
                        alt=""
                      />
                    </div>
                    <div className="userName mt-1">
                      <h5>{user?.userid?.fullname}</h5>
                      <p>{user.msg.slice(0, 25)}</p>
                    </div>
                  </li>
                );
              } else {
                return null;
              }
            })
          : null}
      </ul>
    );
  }
}

export default ChatAppList;
