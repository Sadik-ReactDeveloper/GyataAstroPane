import React, { Component } from "react";
import Streaming from "./Streaming";
// import axiosConfig from "../../../axiosConfig";
class Demo2 extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
    this.onValueChange = this.onValueChange.bind(this);
    // this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange = () => {
    // alert("check");
    // console.log(event);
    // if (event.target.value === "unavailable") {
    //   window.location.reload();
    // }
    // else {
    //   axiosConfig
    //     .post(``)
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
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
              // checked={this.state.selectedOption === "Available"}
              onClick={(e) => {
                this.setState({ selectedOption: e.target.value });
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
              // checked={this.state.selectedOption === "unavailable"}
              onClick={(e) => {
                this.setState({ selectedOption: e.target.value });
                this.onValueChange();
              }}
            />
            Unavailable
          </label>
        </div>
        {this.state.selectedOption === "Available" ? (
          <>
            <Streaming />
          </>
        ) : null}
      </>
    );
  }
}

export default Demo2;
