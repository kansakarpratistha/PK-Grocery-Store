import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPencil } from "@fortawesome/free-solid-svg-icons";
import { Form } from "react-bootstrap";

function LoginBannerRight() {
    const toggleFunction = ()=>{
        console.log("Script function executed!");
        // $('.toggle').click(function(){
		// 		  // Switches the Icon
		// 		  $(this).children('i').toggleclassName('fa-pencil');
		// 		  // Switches the forms  
		// 		  $('.form').animate({
		// 			height: "toggle",
		// 			'padding-top': 'toggle',
		// 			'padding-bottom': 'toggle',
		// 			opacity: "toggle"
		// 		  }, "slow");
		// 		});
    }
  return (
    <div className="w3l_banner_nav_right">
      <div className="w3_login">
        <h3>Sign In & Sign Up</h3>
        <div className="w3_login_module">
          <div className="module form-module">
            <div className="toggle" onClick={toggleFunction}>
                <FontAwesomeIcon icon={faTimes}/>
              <i className="fa fa-times fa-pencil"></i>
              <div className="tooltip">Click Me</div>
            </div>
            <div className="form">
              <h2>Login to your account</h2>
              <form action="#" method="post">
                <input
                  type="text"
                  name="Username"
                  placeholder="Username"
                  required=" "
                />
                <input
                  type="password"
                  name="Password"
                  placeholder="Password"
                  required=" "
                />
                <input type="submit" value="Login" />
              </form>
            </div>
            <div className='form'>
              <h2>Create an account</h2>
              <form action="#" method="post">
                <input
                  type="text"
                  name="Username"
                  placeholder="Username"
                  required=" "
                />
                <input
                  type="password"
                  name="Password"
                  placeholder="Password"
                  required=" "
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="Email Address"
                  required=" "
                />
                <input
                  type="text"
                  name="Phone"
                  placeholder="Phone Number"
                  required=" "
                />
                <input type="submit" value="Register" />
              </form>
            </div>
            <div className="cta">
              <a href="#">Forgot your password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginBannerRight;
