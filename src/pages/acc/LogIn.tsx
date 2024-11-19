import React, { useState } from "react";
import logo from "../../assets/logo.png";
import apple from "../../assets/apple.svg";
import google from "../../assets/google.svg";
import uploadImg from "../../assets/upload.svg";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../Context";
const LogIn: React.FC = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (name === "creator") {
      localStorage.setItem("user", JSON.stringify(true));
      setUser("true");
      navigate("/creator?home=true");
    }
    if (name === "user") {
      localStorage.setItem("user", JSON.stringify(true));
      setUser("true");
      navigate("/user?home=true");
    }
  };
  return (
    <div className="log_container">
      <div className="log_form_container">
        <div className="log_left">
          <img src={logo} alt="" />
          <h2>LOGO</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur
            adipiscing elit
          </p>
        </div>
        <div className="log_right">
          <h2>Login</h2>
          <div className="log_ing_s_btns">
            <button>
              <img src={google} alt="" />
              <span>Continue with Google</span>
            </button>
            <button>
              <img src={apple} alt="" />
              <span>Continue with Apple</span>
            </button>
          </div>
          <div className="login_or">
            <p>OR</p>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className="input_div_f">
              <label htmlFor="">User Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
              />
            </div>
            <div className="input_div_f">
              <label htmlFor="">Password</label>
              <input type="text" />
            </div>
            <button className="input_btn_s" type="submit">
              Login
            </button>
          </form>
          <div className="s_in">
            <span>Do not have an account? </span>
            <Link to="/account">Sing Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
