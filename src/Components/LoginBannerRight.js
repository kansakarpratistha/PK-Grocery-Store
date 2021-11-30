import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faPencil,
  faPencilAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function LoginBannerRight() {
  const [item, setItem] = React.useState(true);
  //for login form
  const [username, setUsername] = React.useState("");
  const [loginPw, setLoginPw] = React.useState("");
  //for registration form
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [mobileNumber, setMobileNumber] = React.useState("");

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

  const registerSubmit = (evt) => {
    evt.preventDefault();
    //call post api for signup and send the variable values as body
    const url = "https://uat.ordering-boafresh.ekbana.net//api/v4/auth/signup";
    const headers = {
      method: "POST",
      headers: {
        "Warehouse-id": "1",
        "Api-key":
          "fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        mobile_number: mobileNumber,
      }),
    };
    const fetchData = async () => {
      try {
        const resp = await fetch(url, headers);
        const json = await resp.json();
        if (resp.status === 201) {
          evt.target.reset();
          handleitem();
          alert("User Registered!");
          return(resp.status);
        } else {
          throw json.errors[0].message;
        }
      } catch (err) {
        alert("Failed: " + err);
      }
    };

    fetchData();
    // alert("Submitting registration"+firstName+lastName);
  };

  const loginSubmit = (evt) => {
    evt.preventDefault();
    const url = "https://uat.ordering-boafresh.ekbana.net//api/v4/auth/login";
    const headers = {
      method: "POST",
      headers: {
        "Warehouse-id": "1",
        "Api-key":
          "fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: 2,
        client_secret: "ZkPYPKRiUsEzVke7Q5sq21DrVvYmNK5w5bZKGzQo",
        grant_type: "password",
        username: username,
        password: loginPw,
      }),
    };
    const fetchData = async () => {
      try {
        const resp = await fetch(url, headers);
        const json = await resp.json();
        console.log(json);
        if (json.access_token) {
          localStorage.setItem("accessToken", json.access_token);
          evt.target.reset();
          window.location.href = "./";
        } else {
          throw json.errors[0].message;
        }
      } catch (err) {
        alert("Failed: " + err);
      }
    };

    fetchData();
    //call post api for login and send the variable values as body
    // alert("Submitting login"+username+loginPw);
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
              <Form onSubmit={loginSubmit}>
                <input
                  type="text"
                  name="Email"
                  placeholder="Email"
                  required=" "
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="password"
                  name="Password"
                  placeholder="Password"
                  required=" "
                  onChange={(e) => setLoginPw(e.target.value)}
                />
                <input type="submit" value="Login" />
              </Form>
            </div>
            <div className="form" id="register-form">
              <h2>Create an account</h2>
              <Form onSubmit={registerSubmit}>
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required=" "
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                  required=" "
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                  required=" "
                />
                <input
                  type="password"
                  name="Password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required=" "
                />
                <input
                  type="text"
                  name="Phone"
                  placeholder="Phone Number"
                  onChange={(e) => setMobileNumber(e.target.value)}
                  required=" "
                />
                <input type="submit" value="Register" />
              </Form>
            </div>
            <div className="cta">
              <Link to="/forgotPassword">Forgot your password?</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginBannerRight;
