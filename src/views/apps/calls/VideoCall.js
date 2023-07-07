import * as React from "react";
// import './style.css';
// import { getUserID } from "../astrologerdetail";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

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
  const astroName = localStorage.getItem("astroname");
  let myMeeting = async (element) => {
    // generate Kit Token
    const appID = 1011009319;
    // const response = getUserID();
    const serverSecret = "0b7c5477f07346c1a906c99d3f171f2e";
    //  console.log(window.location.pathname)
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      randomID(5).toString(),
      astroName
    );

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      useFrontFacingCamera: false,
      sharedLinks: [
        {
          name: "Personal link",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            "/#/VideoCall" +
            window.location.pathname +
            "?roomID=" +
            roomID,
        },
      ],
      turnOnCameraWhenJoining: false,
      scenario: {
        // mode: ZegoUIKitPrebuilt.VideoConference,
        mode: "OneONoneCall",
        config: {
          role: "Host",
        },
      },

      showScreenSharingButton: true,
      preJoinViewConfig: {
        title: "Join AstroGyata Meeting Room",
      },
    });
  };

  return (
    <div className="container">
      <div
        className="myCallContainer pt-3  container"
        ref={myMeeting}
        style={{ width: "100vw", height: "100vh" }}
      ></div>
    </div>
  );
}
