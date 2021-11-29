import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faPencil,
  faPencilAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Form } from "react-bootstrap";

function LoginBannerRight() {
  const [item, setItem] = React.useState(true);
  
  const handleitem = () => {
    setItem(!item);
  };
  React.useEffect(() => {
    let formEl1 = document.getElementById("login-form");
    let formEl2 = document.getElementById("register-form");
    if (item === true) {
      formEl1.style.display = "block";
      formEl2.style.display = "none";
    } else {
      formEl1.style.display = "none";
      formEl2.style.display = "block";
    }
  });


  const toggleFunction = (toggleEl) => {
    console.log(toggleEl.children);

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
  };
  return (
    <div className="w3l_banner_nav_right">
      <div className="w3_login">
        <h3>Sign In & Sign Up</h3>
        <div className="w3_login_module">
          <div className="module form-module">
            <div className="toggle">
              <FontAwesomeIcon
                icon={item ? faPencilAlt : faTimes}
                onClick={() => handleitem()}
              />
              <i className="fa fa-times fa-pencil"></i>
              <div className="tooltip">Click Me</div>
            </div>
            <div className="form" id="login-form">
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
            <div className="form" id="register-form">
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
