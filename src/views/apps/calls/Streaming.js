// import React, { Component } from "react";

// class Demo2 extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "React",
//     };
//     this.onValueChange = this.onValueChange.bind(this);
//     this.formSubmit = this.formSubmit.bind(this);
//   }

//   onValueChange(event) {
//     this.setState({
//       selectedOption: event.target.value,
//     });
//   }

//   formSubmit(event) {
//     event.preventDefault();
//     console.log(this.state.selectedOption);
//   }

//   render() {
//     return (
//       <form onSubmit={this.formSubmit}>
//         <div className="radio">
//           <label>
//             <input
//               type="radio"
//               value="Available"
//               checked={this.state.selectedOption === "Available"}
//               onChange={this.onValueChange}
//             />
//             Available
//           </label>
//         </div>
//         <div className="radio">
//           <label>
//             <input
//               type="radio"
//               value="unavailable"
//               checked={this.state.selectedOption === "unavailable"}
//               onChange={this.onValueChange}
//             />
//             Unavailable
//           </label>
//         </div>

//         <button className="btn btn-primary" type="submit">
//           Submit
//         </button>
//       </form>
//     );
//   }
// }

// export default Demo2;
import * as React from "react";
import { getastroID } from "../../pages/authentication/login/LoginJWT";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import "../../../assets/scss/pages/live-streaming.scss";

function randomID(len) {
  let result = "";
  if (result) return result;
  var chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

export function getUrlParams(url = window.location.href) {
  let urlStr = url.split("?")[1];
  return new URLSearchParams(urlStr);
}

export default function App() {
  const roomID = getUrlParams().get("roomID") || randomID(5);
  console.log("Room", roomID);
  let role_str = "Host";
  // getUrlParams(window.location.href).get("role") || "Host";
  const role = ZegoUIKitPrebuilt.Host;
  console.log("role", role);
  // role_str === "Host"
  // :
  // role_str === "Cohost"
  // ? ZegoUIKitPrebuilt.Cohost
  // : ZegoUIKitPrebuilt.Audience;

  let sharedLinks = [];
  if (role === ZegoUIKitPrebuilt.Host || role === ZegoUIKitPrebuilt.Cohost) {
    sharedLinks.push({
      name: "Join as co-host",
      url:
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname +
        "?roomID=" +
        roomID +
        "&role=Cohost",
    });
  }
  sharedLinks.push({
    name: "Join as audience",
    url:
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      "?roomID=" +
      roomID +
      "&role=Audience",
  });
  // generate Kit Token
  const appID = 912338888;
  const userName = randomID(5);
  // const astrodetails = getastroID();
  const serverSecret = "2d117c2d3654bbba1611b3631f5ba758";
  const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
    appID,
    serverSecret,
    roomID,
    randomID(5),
    userName

    // astrodetails
  );
  console.log(roomID);
  // start the call
  let myMeeting = async (element) => {
    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call

    zp.joinRoom({
      container: element,
      useFrontFacingCamera: false,
      scenario: {
        mode: ZegoUIKitPrebuilt.LiveStreaming,
        config: {
          role,
        },
      },
      sharedLinks,
    });
  };

  return (
    <>
      <div
        className="myCallContainer "
        ref={myMeeting}
        style={{ width: "100vw", height: "100vh" }}
      ></div>
    </>
  );
}
