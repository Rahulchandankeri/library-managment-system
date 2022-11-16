import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPortal from "./Components/Admin/AdminPortal";
import SideNav from "./Components/Admin/NavBar";
import UserLogin from "./Components/Users/UserLogin";
import Home from "./Components/Home";
import Card from "./Components/Admin/Card";
import AdminLogin from "./Components/Admin/AdminLogin";
import UserPortal from "./Components/Users/UserPortal";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/admin-dashboard/*"
            element={
              <div style={{ display: "flex" }}>
                <AdminPortal />
              </div>
            }
          />
          <Route
            path="/admin-login/"
            element={
              <div style={{ display: "flex" }}>
                <AdminLogin />
              </div>
            }
          />
          <Route
            path="/user-login"
            element={
              <>
                <UserLogin />
              </>
            }
          />
          <Route
            path="/user-portal/*"
            element={
              <div style={{ display: "flex" }}>
                <UserPortal />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
