import React from "react";
import logo from "../../assets/logo.png";
import uploadImg from "../../assets/upload.svg";
import "./acc.scss";
const Acc: React.FC = () => {
  return (
    <div className="acc_container">
      <div className="acc_form_container">
        <div className="acc_left">
          <img src={logo} alt="" />
          <h2>LOGO</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur
            adipiscing elit
          </p>
        </div>
        <div className="acc_right">
          <h2>Apply for Account</h2>
          <form action="">
            <div className="input_div_f">
              <label htmlFor="">Email</label>
              <input type="text" />
            </div>
            <div className="input_div_f">
              <label htmlFor="">Full Legal Name</label>
              <input type="text" />
            </div>
            <div className="input_div_s_container">
              <div className="input_div_s">
                <label htmlFor="">Gender</label>
                <input type="text" />
              </div>
              <div className="input_div_s">
                <label htmlFor="">Age</label>
                <input type="text" />
              </div>
            </div>
            <div className="input_btn_f">
              <img src={uploadImg} alt="" />
              <p>Upload ID</p>
            </div>
            <div className="input_btn_f">
              <p>Generate Prompt</p>
            </div>
            <div className="input_btn_s">Apply For an Account</div>
          </form>
          <div className="s_in">
            <span>Already have an account? </span>
            <a href="">Signin</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acc;
