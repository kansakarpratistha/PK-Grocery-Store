import { Col, Row, Image, Card, Form, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function MyProfileBannerRight() {
  const [profile, setProfile] = React.useState({});
  const [oldPw, setOldPw] = React.useState("");
  const [newPw, setNewPw] = React.useState("");
  const [confirmPw, setConfirmPw] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const accessToken = localStorage.getItem("accessToken");
  React.useEffect(() => {
    if (accessToken) {
      getProfile();
    } else {
      window.location.href = "./login";
    }
  }, []);
  const getProfile = () => {
    const url = "https://uat.ordering-boafresh.ekbana.net//api/v4/profile/show";
    const headers = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + accessToken,
        "Api-key":
          "fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545",
      },
    };
    const fetchProfile = async () => {
      try {
        const resp = await fetch(url, headers);
        const json = await resp.json();
        if (resp.status === 200) {
          setProfile(json.data);
        } else {
          throw json.errors[0].message;
        }
      } catch (err) {
        alert("Failed: " + err);
      }
    };

    fetchProfile();
  };

  const UpdateProfile = (evt) => {
    evt.preventDefault();
    var bodyContent = {};
    bodyContent["first-name"] = firstName;
    bodyContent["last-name"] = lastName;
    if (mobile != "") {
      bodyContent["mobile-number"] = mobile;
    }
    const url = "https://uat.ordering-boafresh.ekbana.net//api/v4/profile";
    const headers = {
      method: "PATCH",
      headers: {
        Authorization: "Bearer " + accessToken,
        "Api-key":
          "fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyContent),
    };
    const saveProfile = async () => {
      try {
        const resp = await fetch(url, headers);
        const json = await resp.json();
        if (resp.status === 200) {
          alert("Profile Updated");
          evt.target.reset();
          getProfile();
        } else {
          throw json.errors[0].message;
        }
      } catch (err) {
        alert("Failed: " + err);
      }
    };

    saveProfile();
  };

  const ChangePw = (evt) => {
    evt.preventDefault();
    const url =
      "https://uat.ordering-boafresh.ekbana.net//api/v4/profile/change-password";
    const headers = {
      method: "POST",
      headers: {
        Authorization: "Bearer " + accessToken,
        "Api-key":
          "fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545",
      },
      body: JSON.stringify({
        "new-password": newPw,
        "old-password": oldPw,
        "confirm-password": confirmPw,
      }),
    };
    const savePassword = async () => {
      try {
        const resp = await fetch(url, headers);
        const json = await resp.json();
        if (resp.status === 200) {
          alert("Password Updated!");
          evt.target.reset();
        } else {
          throw json.errors[0].message;
        }
      } catch (err) {
        alert("Failed: " + err);
      }
    };

    savePassword();
  };

  return (
    <div className="w3l_banner_nav_right">
      <div className="agileinfo_single">
        <Container className="mt-0 mb-4 p-0 d-flex justify-content-center">
          <Card className="card p-4">
            <div className="image d-flex flex-column justify-content-center align-items-center">
              <button className="btn btn-secondary">
                <img src={profile.image} height="100" width="100" />
              </button>
              <span class="name mt-3">
                {profile.firstName} {profile.lastName}
              </span>
              <span class="idd">
                <FontAwesomeIcon icon={faEnvelope} />
                {profile.email}
              </span>
              <span class="idd">
                <FontAwesomeIcon icon={faPhoneAlt} />
                {profile.mobileNumber}
              </span>
              <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                <span className="idd1">
                  Loyalty Points:{" "}
                  {profile.total_loyalty_point
                    ? profile.total_loyalty_point
                    : 0}
                </span>
              </div>

              <div className="px-2 rounded mt-4 date ">
                {" "}
                <span className="join">Joined {profile.createdAt}</span>{" "}
              </div>
            </div>
          </Card>
        </Container>
        <Row>
          <Col md={5} className="agileinfo_single_left form-module">
            <div className="form" id="profile-updt-form">
              <h2>Update Profile</h2>
              <Form onSubmit={UpdateProfile}>
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  onChange={(e) => setFirstName(e.target.value)}
                ></input>
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  onChange={(e) => setLastName(e.target.value)}
                ></input>
                <input
                  type="text"
                  placeholder="Mobile Number"
                  onChange={(e) => setMobile(e.target.value)}
                ></input>
                <input type="submit" value="Save" />
              </Form>
            </div>
          </Col>
          <Col md={5} className="agileinfo_single_left form-module">
            <div className="form" id="pw-change-form">
              <h2>Change Password </h2>
              <Form onSubmit={ChangePw}>
                <input
                  type="Password"
                  placeholder="Previous Password"
                  required
                  onChange={(e) => setOldPw(e.target.value)}
                ></input>
                <input
                  type="Password"
                  placeholder="New Password"
                  required
                  onChange={(e) => setNewPw(e.target.value)}
                ></input>
                <input
                  type="Password"
                  placeholder="Confirm Password"
                  required
                  onChange={(e) => setConfirmPw(e.target.value)}
                ></input>
                <input type="submit" value="Change" />
              </Form>
            </div>
          </Col>
          <div className="clearfix"> </div>
        </Row>
      </div>
    </div>
  );
}

export default MyProfileBannerRight;
