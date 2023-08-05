import React, { Component } from "react";
import axiosConfig from "../../../axiosConfig";
import { Button } from "reactstrap";
class Demo2 extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
    // this.onValueChange = this.onValueChange.bind(this);
  }

  // onValueChange = () => {
  // console.log("already live");
  // axiosConfig
  //   .get(`/user/closeLiveStream/${localStorage.getItem("stopLiveId")}`)
  //   .then((response) => {
  //     console.log("Stop LIVE  ", response.data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // };
  deleteLive = () => {
    console.log("deleteddd");
    axiosConfig
      .get(`/user/closeLiveStream/${localStorage.getItem("stopLiveId")}`)
      .then((response) => {
        console.log("Stop LIVE  ", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <>
        <div className="radio">
          <label>
            <input
              name="name"
              type="radio"
              value="Available"
              onClick={(e) => {
                // this.setState({ selectedOption: e.target.value });
                this.onValueChange();
              }}
            />
            Available
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              name="name"
              type="radio"
              value="unavailable"
              onClick={(e) => {
                this.setState({ selectedOption: e.target.value });
                // this.onValueChange();
              }}
            />
            Unavailable
          </label>
          <Button onClick={() => this.deleteLive()}>Already Live</Button>
        </div>

        <a href="#/yourlivestream" target="_blank">
          {/* <Streaming /> */}
          LivePage
        </a>
      </>
    );
  }
}

export default Demo2;
