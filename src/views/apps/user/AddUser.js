import React, { Component } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  Button,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import { Route } from "react-router-dom";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";

export default class AddCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      customer_email: "",
      mobile_no: "",
      // selectedFile: null,
      status: "",
      dob: "",
      // doregister: "",
      password: "",
      cnfrmpassword: "",
    };
  }

  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();

    axiosConfig
      .post(`/user/customersignup`, this.state)
      .then((response) => {
        console.log(response);
        alert("Customer Added Successful");
        this.props.history.push("/app/customer/customerList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Breadcrumbs
          breadCrumbTitle="Customer"
          breadCrumbParent="Home"
          breadCrumbActive="Add Customer "
        />
        <Card>
          <Row className="m-2">
            <Col>
              <h1 sm="6" className="float-left">
                Add User
              </h1>
            </Col>

            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/userride/userRideList")}
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>First Name</Label>
                  <Input
                    required
                    type="text"
                    name="first_name"
                    placeholder="Enter First Name"
                    value={this.state.first_name}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Last Name</Label>
                  <Input
                    required
                    type="text"
                    name="last_name"
                    placeholder="Enter Last Name"
                    value={this.state.last_name}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Email</Label>
                  <Input
                    required
                    type="email"
                    name="customer_email"
                    placeholder="Enter Email"
                    value={this.state.customer_email}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>

                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Mobile No.</Label>
                  <Input
                    required
                    type="tel"
                    name="mobile_no"
                    placeholder="Mobile No."
                    maxlength="10"
                    value={this.state.mobile_no}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>DOB</Label>
                  <Input
                    required
                    type="date"
                    name="dob"
                    value={this.state.sortorder}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Date Of Register</Label>
                  <Input
                    required
                    type="date"
                    name="doregister"
                    value={this.state.doregister}
                    onChange={this.changeHandler}
                  ></Input>
                </Col> */}
              </Row>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Password </Label>
                  <Input
                    required
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={this.state.password}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Confirm Password </Label>
                  <Input
                    required
                    type="password"
                    name="cnfrmpassword"
                    placeholder="Enter Confirm  Password"
                    value={this.state.cnfrmpassword}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
              </Row>
              <Col lg="6" md="6" sm="6" className="mb-2">
                <Label className="mb-1">Status</Label>
                <div
                  className="form-label-group"
                  onChange={(e) => this.changeHandler1(e)}
                >
                  <input
                    style={{ marginRight: "3px" }}
                    type="radio"
                    name="status"
                    value="Active"
                  />
                  <span style={{ marginRight: "20px" }}>Active</span>

                  <input
                    style={{ marginRight: "3px" }}
                    type="radio"
                    name="status"
                    value="Inactive"
                  />
                  <span style={{ marginRight: "3px" }}>Inactive</span>
                </div>
              </Col>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Add User
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
