import React from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { history } from "../../../history";
import "../../../assets/scss/pages/app-ecommerce-shop.scss";
import axiosConfig from "../../../axiosConfig";
import { Route } from "react-router-dom";
class BirthChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    this.draw();
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/nodejs/api/dealer/getonebank/${id}`)
      .then((response) => {
        // console.log(response.data);
        console.log(response.data.data);
        this.setState({ data: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  draw = () => {
    var canvas = document.getElementById("canvas");
    var canvasParentWidth =
      document.getElementById("canvas").parentElement.offsetWidth;
    console.log(canvasParentWidth);
    document.getElementById("canvas").style.width =
      canvasParentWidth - 10 + "px";
    document.getElementById("canvas").style.height =
      canvasParentWidth - 10 + "px";
    //var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      // var canvas = document.getElementById("canvas");
      var ctx = canvas.getContext("2d");

      this.drawSquareHouse(ctx, 50, 0, 75, 25, 50, 50, 25, 25);
      this.setText(ctx, 50, 25, "1", "subtext");

      this.drawTriangleHouse(ctx, 0, 0, 50, 0, 25, 25);
      this.setText(ctx, 25, 12, "2", "subtext");

      this.drawTriangleHouse(ctx, 0, 0, 25, 25, 0, 50);
      this.setText(ctx, 12, 25, "3", "subtext");

      this.drawSquareHouse(ctx, 25, 25, 50, 50, 25, 75, 0, 50);
      this.setText(ctx, 25, 50, "4", "subtext");

      this.drawTriangleHouse(ctx, 0, 50, 25, 75, 0, 100);
      this.setText(ctx, 12, 75, "5", "subtext");

      this.drawTriangleHouse(ctx, 25, 75, 50, 100, 0, 100);
      this.setText(ctx, 25, 88, "6", "subtext");

      this.drawSquareHouse(ctx, 50, 50, 75, 75, 50, 100, 25, 75);
      this.setText(ctx, 50, 75, "7", "subtext");

      this.drawTriangleHouse(ctx, 75, 75, 100, 100, 50, 100);
      this.setText(ctx, 75, 88, "8", "subtext");

      this.drawTriangleHouse(ctx, 75, 75, 100, 50, 100, 100);
      this.setText(ctx, 88, 75, "9", "subtext");

      this.drawSquareHouse(ctx, 75, 25, 100, 50, 75, 75, 50, 50);
      this.setText(ctx, 75, 50, "10", "subtext");

      this.drawTriangleHouse(ctx, 100, 0, 100, 50, 75, 25);
      this.setText(ctx, 88, 25, "11", "subtext");

      this.drawTriangleHouse(ctx, 50, 0, 100, 0, 75, 25);
      this.setText(ctx, 75, 12, "12", "subtext");
    }
  };

  drawTriangleHouse = (context, x1, y1, x2, y2, x3, y3) => {
    var canvas = document.getElementById("canvas");
    context.beginPath();
    context.moveTo((x1 * canvas.width) / 100, (y1 * canvas.height) / 100);
    context.lineTo((x2 * canvas.width) / 100, (y2 * canvas.height) / 100);
    context.lineTo((x3 * canvas.width) / 100, (y3 * canvas.height) / 100);
    context.closePath();
    context.lineWidth = 1;
    context.strokeStyle = "#666666";
    context.stroke();
  };

  drawSquareHouse = (context, x1, y1, x2, y2, x3, y3, x4, y4) => {
    var canvas = document.getElementById("canvas");
    context.beginPath();
    context.moveTo((x1 * canvas.width) / 100, (y1 * canvas.height) / 100);
    context.lineTo((x2 * canvas.width) / 100, (y2 * canvas.height) / 100);
    context.lineTo((x3 * canvas.width) / 100, (y3 * canvas.height) / 100);
    context.lineTo((x4 * canvas.width) / 100, (y4 * canvas.height) / 100);
    context.closePath();
    context.lineWidth = 1;
    context.strokeStyle = "#666666";
    context.stroke();
  };

  setText = (context, x, y, maintext, subtext) => {
    var canvas = document.getElementById("canvas");
    context.font = "16px Comic Sans MS";
    context.fillStyle = "red";
    context.fillText(
      maintext,
      (x * canvas.width) / 100,
      (y * canvas.width) / 100
    );
    //context.fillStyle = "gray";
    //context.fillText(subtext, (x-20) * canvas.width / 100, y * canvas.width / 100);
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <Row>
            <Col sm="12">
              <div>
                <Breadcrumb listTag="div">
                  <BreadcrumbItem href="/analyticsDashboard" tag="a">
                    Home
                  </BreadcrumbItem>
                  <BreadcrumbItem href="/app/setting/bank/bankList" tag="a">
                    Bank List
                  </BreadcrumbItem>
                  <BreadcrumbItem active>View Bank</BreadcrumbItem>
                </Breadcrumb>
              </div>
            </Col>
          </Row>
          <Card className="overflow-hidden app-ecommerce-details">
            <Row className="m-2">
              <Col>
                <h1 col-sm-6 className="float-left">
                  BirthDetails
                </h1>
              </Col>
              <Col>
                <Route
                  render={({ history }) => (
                    <Button
                      className=" btn btn-danger float-right"
                      onClick={() =>
                        history.push("/app/conversation/intakelist")
                      }
                    >
                      Back
                    </Button>
                  )}
                />
              </Col>
            </Row>
            <CardBody className="pb-0">
                 <canvas id="canvas" width="400" height="500"></canvas>
            </CardBody>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}
export default BirthChart;
