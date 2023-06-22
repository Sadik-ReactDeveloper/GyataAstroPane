import React from "react";

import "../../../assets/scss/pages/astrochat.scss";
import userprofile from "../../../assets/img/userprofile.png";
class ChatAppList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userChatList: this.props.userChatList,
      roomid: "",
    };
  }

  render() {
    const { userChatList } = this.props;

    return (
      <ul>
        {userChatList.length
          ? userChatList.map((user, i) => {
              return (
                <li
                  className="userList"
                  onClick={() => this.props.getChatRoomId(user, i)}
                >
                  <div className="imglf">
                    {user.userid?.userimg[0] ? (
                      <img
                        src={user.userid?.userimg[0]}
                        className="app-img"
                        alt=""
                      />
                    ) : (
                      <img src={userprofile} className="app-img" alt="" />
                    )}
                  </div>
                  <div className="lst-con">
                    <h5>{user.userid?.fullname}</h5>
                    <p>{user.msg}</p>
                  </div>
                </li>
              );
            })
          : null}
      </ul>
    );
  }
}

export default ChatAppList;
