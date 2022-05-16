import React, { useContext, useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { Route, Switch, useRouteMatch } from "react-router";
import { UserContext } from "../../../App";
import AddDoctor from "../../AddDoctor/AddDoctor/AddDoctor";
import AllPateints from "../../AllPateints/AllPateints/AllPateints";
import AppoinmentByDate from "../AppoinmentByDate/AppoinmentByDate";
import SideBar from "../SideBar/SideBar";
import "./Dashboard.css";

const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const { email } = loggedInUser;
  const [isDoctor, setIsDoctor] = useState(false);

  useEffect(() => {
    fetch("https://doctors-portall.herokuapp.com/isAdmin", {
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
      <div className="p-0 overflow-hidden pr container-fluid">
        <div className="row">
          <div className="col-md-2 col-sm-12 col-12">
            <SideBar url={url} path={path}></SideBar>
          </div>
          <Col md={10} sm={12} xs={12} className="">
            <div className="user-area ">
              <img src={loggedInUser?.photoURL} alt="" />
              <h5>{loggedInUser.googleName}</h5>
            </div>
            
           
            {isDoctor ? 
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
            :
            <>
             <Route  path={`${path}`}>
                    <AppoinmentByDate></AppoinmentByDate>
                  </Route>
            </>}
          </Col>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
