import Login from "./Login";

function Logout() {
  localStorage.removeItem("accessToken");
  window.location.href="./login"
}

export default Logout;