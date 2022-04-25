import "./App.css"
import {Route,Routes} from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { EmployeeList } from "./components/EmployeeList";
import { EmployeeDetails } from "./components/EmployeeDetails";
import { Admin } from "./components/Admin";
// import { ProtectedRoute } from "./components/PrivateRoute";
import { Navbar } from "./components/Navbar";
import { Logout } from "./components/Logout";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/EmployeeList" element={<EmployeeList/>}></Route>
        <Route path="/EmployeeDetails" element={<EmployeeDetails/>}></Route>
        <Route path="/Admin" element={<Admin/>}></Route>
        <Route path="/Logout" element={<Logout/>}></Route>
      </Routes>
    </div>
  );
}

export default App;