import * as React from "react";
// import './style.css';
// import { getUserID } from "../astrologerdetail";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

// get token
function generateToken(tok, userID) {
  // Obtain the token interface provided by the App Server
  return fetch(`${tok}/access_token?userID=${userID}&expired_ts=7200`, {
    method: "GET",
  }).then((res) => res.json());
}
function randomID(len) {
  let result = "";
  if (result) return result;
  var chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars?.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}
export function getUrlParams(url = window.location.href) {
  let urlStr = url.split("?")[1];
  return new URLSearchParams(urlStr);
}

export default function App() {
  const roomID = getUrlParams().get("roomID") || randomID(4);
  const userID = "demo";
  const userName = "demo";
  const tokn =
    "04AAAAAGRnaDEAEDF2NmRidmFvYzVtMDh5enYAoHQN1UVEX3SvxWqHyD+WAz+z3WcONHy/qPIazySzboYaHIHrFP8JfbW4YtDHgPhgaNS1l1R1229c4Z9ldg0UWlXeycDQyYf2WdBfzn9gTixATQ0Df3JZVR1NxZlgJAWKP6qqoOJnOZYQyY36WDp97m7ue/AS5JMXS5UasV3j56TKhpk3wKbIvkyYxG97NlVRIeWhl1bcPgKUm3L2B1LZ2gQ=";
  const { token } = generateToken(tokn, userID);
  let myMeeting = async (element) => {
    const KitToken = ZegoUIKitPrebuilt.generateKitTokenForProduction(
      1011009319,
      token,
      roomID,
      userID,
      userName
    );
    const zp = ZegoUIKitPrebuilt.create(KitToken);

    zp.joinRoom({
      container: element,
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
      // maxUsers: 4,
      branding: {
        logoURL:
          "https://www.zegocloud.com/_nuxt/img/zegocloud_logo_white.ddbab9f.png",
      },
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      // sharedLinks,
    });
  };
  // let myMeeting = async (element) => {
  //   // generate Kit Token
  //   const appID = 1011009319;
  //   // const response = getUserID();
  //   const serverSecret = "0b7c5477f07346c1a906c99d3f171f2e";
  //   //  console.log(window.location.pathname)
  //   const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
  //     appID,
  //     serverSecret,
  //     roomID,
  //     randomID(5).toString(),
  //     "Sadik Khan"
  //     //   response
  //   );

  //   // Create instance object from Kit Token.
  //   const zp = ZegoUIKitPrebuilt.create(kitToken);
  //   // start the call
  //   zp.joinRoom({
  //     container: element,
  //     useFrontFacingCamera: false,
  //     sharedLinks: [
  //       {
  //         name: "Personal link",
  //         url:
  //           window.location.protocol +
  //           "//" +
  //           window.location.host +
  //           "/#/VideoCall" +
  //           window.location.pathname +
  //           "?roomID=" +
  //           roomID,
  //       },
  //     ],
  //     turnOnCameraWhenJoining: false,
  //     scenario: {
  //       // mode: ZegoUIKitPrebuilt.VideoConference,
  //       mode: "OneONoneCall",
  //       config: {
  //         role: "Host",
  //       },
  //     },

  //     showScreenSharingButton: true,
  //     preJoinViewConfig: {
  //       title: "Join AstroGyata Meeting Room",
  //     },
  //   });
  // };

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

// import * as React from "react";
// // import './style.css';
// // import { getUserID } from "../astrologerdetail";
// import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

// function randomID(len) {
//   let result = "";
//   if (result) return result;
//   var chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
//     maxPos = chars.length,
//     i;
//   len = len || 5;
//   for (i = 0; i < len; i++) {
//     result += chars.charAt(Math.floor(Math.random() * maxPos));
//   }
//   return result;
// }

// export function getUrlParams(url = window.location.href) {
//   let urlStr = url.split("?")[1];
//   return new URLSearchParams(urlStr);
// }

// export default function App() {
//   const roomID = getUrlParams().get("roomID") || randomID(5);
//   let myMeeting = async (element) => {
//     // generate Kit Token
//     const appID = 1011009319;
//     // const response = getUserID();
//     const serverSecret = "0b7c5477f07346c1a906c99d3f171f2e";
//     //  console.log(window.location.pathname)
//     const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
//       appID,
//       serverSecret,
//       roomID,
//       randomID(5).toString(),
//       "Sadik Khan"
//       //   response
//     );

//     // Create instance object from Kit Token.
//     const zp = ZegoUIKitPrebuilt.create(kitToken);
//     // start the call
//     zp.joinRoom({
//       container: element,
//       useFrontFacingCamera: false,
//       sharedLinks: [
//         {
//           name: "Personal link",
//           url:
//             window.location.protocol +
//             "//" +
//             window.location.host +
//             "/#/VideoCall" +
//             window.location.pathname +
//             "?roomID=" +
//             roomID,
//         },
//       ],
//       turnOnCameraWhenJoining: false,
//       scenario: {
//         // mode: ZegoUIKitPrebuilt.VideoConference,
//         mode: "OneONoneCall",
//         config: {
//           role: "Host",
//         },
//       },

//       showScreenSharingButton: true,
//       preJoinViewConfig: {
//         title: "Join AstroGyata Meeting Room",
//       },
//     });
//   };

//   return (
//     <div className="container">
//       <div
//         className="myCallContainer pt-3  container"
//         ref={myMeeting}
//         style={{ width: "100vw", height: "100vh" }}
//       ></div>
//     </div>
//   );
// }
