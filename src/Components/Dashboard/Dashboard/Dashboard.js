import React, { useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";
import "./Dashboard.css";
import AppoinmentByDate from "../AppoinmentByDate/AppoinmentByDate";
import { UserContext } from "../../../App";
import { useContext } from "react";
import { Col } from "react-bootstrap";
import { Switch, Route, useRouteMatch } from "react-router";
import AllPateints from "../../AllPateints/AllPateints/AllPateints";
import AddDoctor from "../../AddDoctor/AddDoctor/AddDoctor";

const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const { email } = loggedInUser;
  const [isDoctor, setIsDoctor] = useState(false);

  useEffect(() => {
    fetch("https://peaceful-sierra-17047.herokuapp.com/isAdmin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    })
      .then((res) => res.json())
      .then((data) => setIsDoctor(data));
  }, []);

  const { url, path } = useRouteMatch();

  const containerStyle = {
    backgroundColor: "#f4fbfd",
    height: "600px",
  };
  console.log(loggedInUser);
  return (
    <section style={containerStyle}>
      <div className="d-block overflow-hidden w-100 pr ">
        <div className="row">
          <div className="col-md-2 col-sm-2 col-2">
            <SideBar url={url} path={path}></SideBar>
          </div>
          <Col md={10} sm={10} xs={10} className="pl-0 pr-0 ">
            <div className="user-area ">
              <img src={loggedInUser?.photoURL} alt="" />
              <h5>{loggedInUser.googleName}</h5>
            </div>
            {isDoctor && (
              <>
                <Switch>
                  <Route exact path={`${path}`}>
                    <AppoinmentByDate></AppoinmentByDate>
                  </Route>
                  <Route  path={`${path}/allPatients`}>
                    <AllPateints></AllPateints>
                  </Route>
                  <Route  path={`${path}/addDoctor`}>
                    <AddDoctor></AddDoctor>
                  </Route>
                </Switch>
              </>
            )}
          </Col>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
