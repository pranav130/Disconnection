import React from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom"

//import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const myLogin = async (e) => {
    e.preventDefault();
    const email = document.querySelector("#exampleInputEmail1").value;
    const password = document.querySelector("#exampleInputPassword1").value;
    console.log(email + " " + password);

    try {
      const response = await axios({
        method: "get",
        url: "http://localhost:8080/login/",
        params: { email },
      });
      console.log(response);
      if (password === response.data.password) {
       
        navigate("/home")

        
      } else {
        alert("Incorrect password");
      }
    } catch (err) {
      console.log(err.response.data);
      alert("Please enter correct Userid and Password.");
    }
  };
  return (
  //   <div>
  //  <form onSubmit={myLogin}>
  //       <div class="form-group">
  //         <label for="exampleInputEmail1">Email address</label>
  //         <input
  //           type="email"
  //           class="form-control"
  //           id="exampleInputEmail1"
  //           aria-describedby="emailHelp"
  //           placeholder="Enter email"
  //         />
  //         <small id="emailHelp" class="form-text text-muted">
  //           We'll never share your email with anyone else.
  //         </small>
  //       </div>
  //       <div class="form-group">
  //         <label for="exampleInputPassword1">Password</label>
  //         <input
  //           type="password"
  //           class="form-control"
  //           id="exampleInputPassword1"
  //           placeholder="Password"
  //         />
  //       </div>
  //       <div class="form-group form-check">
  //         <input type="checkbox" class="form-check-input" id="exampleCheck1" />
  //         <label class="form-check-label" for="exampleCheck1">
  //           Check me out
  //         </label>
  //       </div>
  //       <button type="submit" class="btn btn-primary">
  //         Submit
  //       </button>
  //     </form>
  //   </div>
  <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={myLogin}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">JE Login </h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              id="exampleInputEmail1"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              id="exampleInputPassword1"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
             <a href="#">Forgot password?</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="/">Previous Page</a>
          </p>
         
        
        </div>
      </form>
    </div>
  );
};

export default Login;
