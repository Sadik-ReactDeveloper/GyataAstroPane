import React, { Component } from "react";
import LivePage from "./LivePage";
import Streaming from "./Streaming";
import { Button } from "reactstrap";
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

  onValueChange = () => {};

  render() {
    return (
      <>
        {/* <div className="radio">
          <label>
            <input
              name="name"
              type="radio"
              value="Available"
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
              onClick={(e) => {
                this.setState({ selectedOption: e.target.value });
                this.onValueChange();
              }}
            />
            Unavailable
          </label>
        </div> */}

        <a href="#/yourlivestream" target="_blank">
          {/* <Streaming /> */}
          LivePage
        </a>
      </>
    );
  }
}

export default Demo2;
