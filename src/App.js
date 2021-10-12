import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Appoinment from './Components/Appoinment/Appoinment/Appoinment';
import { createContext, useState } from 'react';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import AllPateints from './Components/AllPateints/AllPateints/AllPateints';
import AddDoctor from './Components/AddDoctor/AddDoctor/AddDoctor';
import PrivateRoute from './Components/Login/PrivateRoute';
export const UserContext = createContext();

function App() {
  const [ loggedInUser, setLoggedInUser] = useState({
   
  })
  console.log(loggedInUser);
  return (
    <UserContext .Provider  value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route  path="/home">
          <Home></Home>
        </Route>
        <Route  path="/doctor/appointment">
          <Appoinment />
        </Route>
        <Route  path="/doctor/allPatients">
          <AllPateints />
        </Route>
        <PrivateRoute path="/doctor/dashboard">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <PrivateRoute path="/doctor/addDoctor">
          <AddDoctor />
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
