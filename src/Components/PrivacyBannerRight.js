import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaste,
  faQrcode,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function PrivacyBannerRight() {
  return (
    <div className="w3l_banner_nav_right">
      <div className="privacy">
        <div className="privacy1">
          <h3>Privacy Policy</h3>
          <div className="banner-bottom-grid1 privacy1-grid">
            <ul>
              <li>
                <FontAwesomeIcon
                  icon={faUser}
                  className="glyphicon glyphicon-user"
                  aria-hidden="true"
                />
              </li>
              <li>
                Profile{" "}
                <span>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <FontAwesomeIcon
                  icon={faSearch}
                  className="glyphicon glyphicon-search"
                  aria-hidden="true"
                />
              </li>
              <li>
                Search{" "}
                <span>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <FontAwesomeIcon
                  icon={faPaste}
                  className="glyphicon glyphicon-paste"
                  aria-hidden="true"
                />
              </li>
              <li>
                News Feed{" "}
                <span>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <FontAwesomeIcon
                  icon={faQrcode}
                  className="glyphicon glyphicon-qrcode"
                  aria-hidden="true"
                />
              </li>
              <li>
                Applications{" "}
                <span>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="privacy1">
          <h3>Terms of Use</h3>
          <div className="banner-bottom-grid1 privacy2-grid">
            <div className="privacy2-grid1">
              <h4>deserunt mollit anim id est laborum?</h4>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.
              </p>
              <div className="privacy2-grid1-sub">
                <h5>1. sint occaecat cupidatat non proident, sunt</h5>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className="privacy2-grid1-sub">
                <h5>2.perspiciatis unde omnis iste natus error</h5>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className="privacy2-grid1-sub">
                <h5>3. natus error sit voluptatem accusant</h5>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className="privacy2-grid1-sub">
                <h5>4. occaecat cupidatat non proident, sunt in</h5>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className="privacy2-grid1-sub">
                <h5>5. deserunt mollit anim id est laborum</h5>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyBannerRight;
