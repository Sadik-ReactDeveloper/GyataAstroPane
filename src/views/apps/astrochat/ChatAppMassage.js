// import React from "react";
// // import { Link } from "react-router-dom";
// // import { Container } from "reactstrap";
// import "../../../assets/scss/pages/astrochat.scss";
// // import Buyimg from "../../../assets/img/boy-img.png";
// // import Countdown from "react-countdown";
// import moment from "moment";
// class ChatAppMassage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     // console.log("props value", this.props.roomChatData);
//     return (
//       <>
//         {this.props.roomChatData.length
//           ? this.props.roomChatData
//               .map((chat, index) => {
//                 return (
//                   <div key={index}>
//                     {chat.type !== "user" ? (
//                       <div class="message me ">
//                         <div class="message-body">
//                           {chat.msg}
//                           <div>
//                             <span>{moment(chat.createdAt).format("hA")}</span>
//                           </div>
//                         </div>
//                       </div>
//                     ) : (
//                       <div className="message d-flex ">
//                         <div class="message-body">
//                           {chat.msg}

//                           <div className="setTime">
//                             <small>{moment(chat.createdAt).format("hA")}</small>
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 );
//               })
//               .reverse()
//           : null}
//       </>
//     );
//   }
// }

// export default ChatAppMassage;
import React from "react";
// import { Link } from "react-router-dom";
// import { Container } from "reactstrap";
import "../../../assets/scss/pages/astrochat.scss";
// import Buyimg from "../../../assets/img/boy-img.png";
// import Countdown from "react-countdown";

class ChatAppMassage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log("props value", this.props.roomChatData);
    return (
      <>
        {this.props.roomChatData?.length
          ? this.props.roomChatData
              .map((chat, index) => {
                return (
                  <>
                    {chat.type === "astrologer" ? (
                      <div class="message me">
                        <div class="message-body">{chat?.msg}</div>
                      </div>
                    ) : (
                      <div className="message">
                        <div class="message-body">{chat?.msg}</div>
                      </div>
                    )}
                  </>
                );
              })
              .reverse()
          : null}
      </>
    );
  }
}

export default ChatAppMassage;
