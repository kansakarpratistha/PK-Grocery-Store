import react from "react";
import { Container } from "react-bootstrap";

function Newsletter() {
  return (
    <div className="newsletter">
      <Container>
        <div className="w3agile_newsletter_left">
          <h3>sign up for our newsletter</h3>
        </div>
        <div className="w3agile_newsletter_right">
          <form action="#" method="post">
            <input
              type="email"
              name="Email"
              value="Email"
              onfocus="this.value = '';"
              onblur="if (this.value == '') {this.value = 'Email';}"
              required=""
            />
            <input type="submit" value="subscribe now" />
          </form>
        </div>
        <div className="clearfix"> </div>
      </Container>
    </div>
  );
}

export default Newsletter;
