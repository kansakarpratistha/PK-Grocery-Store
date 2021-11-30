import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function ForgotPasswordBannerRight() {
    const [email, setEmail] = React.useState("");

    const forgotPassword=(evt)=>{
        evt.preventDefault();
    const url = "https://uat.ordering-boafresh.ekbana.net//api/v4/auth/forgot-password";
    const headers = {
      method: "POST",
      headers: {
        "Warehouse-id": "1",
        "Api-key":
          "fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email
      }),
    };
    const fetchData = async () => {
      try {
        const resp = await fetch(url, headers);
        const json = await resp.json();
        if (resp.status === 200) {
          evt.target.reset();
          alert("A link has been sent to the provided email for password reset.");
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
    }
  return (
    <div className="w3l_banner_nav_right">
      <div className="w3_login">
        <h3>Forgot Password</h3>
        <div className="w3_login_module">
          <div className="module form-module">
            <div className="form" id="forgot-pw-form">
              <h2>Enter your email address</h2>
              <Form onSubmit={forgotPassword}>
                <input
                  type="email"
                  name="Email"
                  placeholder="Email"
                  required=" "
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input type="submit" value="Send Link" />
              </Form>
            </div>
            <div className="cta">
              <Link to='/login'>Back To Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordBannerRight;
