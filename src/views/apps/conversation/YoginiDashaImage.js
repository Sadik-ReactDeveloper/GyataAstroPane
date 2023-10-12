import { Line } from "react-chartjs-2";
import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  CustomInput,
  Label,
  Button,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import "react-toastify/dist/ReactToastify.css";
import { Route, useHistory } from "react-router-dom";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
// import swal from "sweetalert";

function YoginiDashaImage(props) {
  const [category, setCategory] = useState("");
  const [userData, setuserData] = useState("");
  const [yoginiDasha, setyoginiDasha] = useState("");
  const [svgData1, setSvgData] = useState("");
  const [DOB, setDOB] = useState("");
  const history = useHistory();
  const list = [
    {
      id: "1",
      label: "Chalit Chart",
      value: "ChalitChart",
    },
    {
      id: "2",
      label: "Sun Chart",
      value: "SunChart",
    },
    {
      id: "3",
      label: "Moon Chart",
      value: "MOONChart",
    },
    {
      id: "4",
      label: "Brith Chart",
      value: "Brith Chart",
    },
    {
      id: "5",
      label: "Hora Chart",
      value: "HoraChart",
    },
    {
      id: "6",
      label: "Dreshkan Chart",
      value: "DreshkanChart",
    },
    {
      label: "Chathurthamasha Chart",
      value: "ChathurthamashaChart",
    },
    {
      label: "Panchmansha Chart",
      value: "PanchmanshaChart",
    },
    {
      label: "Saptamansha Chart",
      value: "SaptamanshaChart",
    },
    {
      label: "Ashtamansha Chart",
      value: "AshtamanshaChart",
    },
    {
      label: "Navamansha Chart",
      value: "NavamanshaChart",
    },
    {
      label: "Dashamansha Chart",
      value: "D10",
    },
    {
      label: "Dwadashamsha Chart",
      value: "DwadashamshaChart",
    },
    {
      label: "Shodashamsha Chart",
      value: "ShodashamshaChart",
    },
    {
      label: "Vishamansha Chart",
      value: "VishamanshaChart",
    },
    {
      label: "Chaturvimshamsha Chart",
      value: "ChaturvimshamshaChart",
    },
    {
      label: "Bhamsha Chart",
      value: "BhamshaChart",
    },
    {
      label: "Trishamansha Chart",
      value: "TrishamanshaChart",
    },
    {
      label: "Khavedamsha Chart",
      value: "KhavedamshaChart",
    },
    {
      label: "Akshvedansha Chart",
      value: "AkshvedanshaChart",
    },
    {
      label: "Shashtymsha Chart",
      value: "ShashtymshaChart",
    },
  ];

  useEffect(() => {
    const lat = props.location.anotherParam;
    const long = props.location.anotherParam2;
    console.log(props.history.location.state);
    const arr = props.history.location.state.date_of_time.split(":");
    const hour = parseInt(arr[0]);
    const min = parseInt(arr[1]);

    let dob = props.history.location.state.dob;
    const date = new Date(dob);
    const Year = date.getFullYear();
    const month = date.getMonth();
    const actualmonth = month + 1;
    const Day = date.getDate();
    setDOB({
      day: Day,
      month: actualmonth,
      year: Year,
      hour: hour,
      min: min,
      lat: lat,
      lon: long,
      tzone: 5.5,
    });
    setuserData(props.history.location.state);
  }, []);

  const changeHandler1 = (e) => {
    setCategory(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    axiosConfig
      .post(`/user/ChartImage/${category}`, DOB)
      .then((response) => {
        console.log(response.data);
        setSvgData(response.data);
      })
      .catch((error) => {
        console.log("Error BirthDetails", error);
      });
  };

  return (
    <div>
      <Breadcrumbs
        breadCrumbTitle="Add Product"
        breadCrumbParent=" Product Management"
        breadCrumbActive="Add Product"
      />
      <Card>
        <Row className="m-2">
          <Col>
            <h1 col-sm-6 className="float-left">
              HoroScope Chart
            </h1>
          </Col>
          <Col>
            <Route
              render={({ history }) => (
                <Button
                  className=" btn btn-danger float-right"
                  onClick={() => history.push("/app/products/productlist")}
                >
                  Back
                </Button>
              )}
            />
          </Col>
        </Row>
        <CardBody>
          <Form className="m-1" onSubmit={submitHandler}>
            <Row>
              <Col lg="4" md="4" sm="4" className="mb-2">
                <Label>Select For Chart</Label>
                <CustomInput
                  required
                  type="select"
                  name="category"
                  value={category}
                  onChange={changeHandler1}
                >
                  <option>Select.....</option>
                  {list?.map((catList) => (
                    <option key={catList.id} value={catList.value}>
                      {catList.value}
                    </option>
                  ))}
                </CustomInput>
              </Col>
            </Row>
            <Row>
              <Col>
                <div dangerouslySetInnerHTML={{ __html: svgData1 }} />
              </Col>
            </Row>
            <Row>
              <Col lg="6" md="6" sm="6" className="mb-2">
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="mr-1 mb-1"
                >
                  Submit
                </Button.Ripple>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}

export default YoginiDashaImage;
