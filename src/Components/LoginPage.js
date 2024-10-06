import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
// import img from "./logo.svg";
function LoginPage() {
    const navigation = useNavigate()
  return (
    <div>
      <div className="container mt-5">
        <h2>Login To See</h2>
        <form style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
          <div className="mb-3" style={{display:'flex', gap:'20px'}} >
            <label htmlFor="name" className="form-label">
              Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              style={{width:'500px'}}
            />
          </div>
          <div className="mb-3" style={{display:'flex', gap:'20px'}} >
            <label htmlFor="name" className="form-label">
              PassWord
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your Password"
              style={{width:'500px'}}
            />
          </div>
          
          
          <button type="submit" className="btn btn-primary" onClick={() => navigation('/DashBoard')}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default LoginPage;
