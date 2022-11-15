import React from "react";
import teamCliScreenshot from "../images/team-cli-screenshot.png";
import socialNetworkScreenshot from "../images/social-network-screenshot.png";
import eCommerceScreenshot from "../images/e-commerce-screenshot.png";
import artistInfoScreenshot from "../images/artist-info-screenshot.png";

const styles = {
  card: {
    width: "18rem",
  },
};
export default function Work() {
  return (
    <div>
      <div className="row d-flex justify-content-center text-center">
        <h1>Work Page</h1>
        <p>Select one of my projects to view it's repository!</p>
      </div>

      <div className="m-5 p-3 d-flex justify-content-around">
        <div className="row d-block">
          <a target={"_blank"} href="https://github.com/GavPO/team-cli">
            <div className="card" style={styles.card}>
              <img
                src={teamCliScreenshot}
                className="card-img-top"
                alt="Team CLI"
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </a>

          <a target={"_blank"} href="https://github.com/GavPO/social-network-api">
            <div className="card" style={styles.card}>
              <img
                src={socialNetworkScreenshot}
                className="card-img-top"
                alt="Social Network API"
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="row">
          <a target={"_blank"} href="https://gavpo.github.io/artist-info/">
            <div className="card" style={styles.card}>
              <img
                src={artistInfoScreenshot}
                className="card-img-top"
                alt="Artist Info"
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </a>

          <a target={"_blank"} href="https://github.com/GavPO/e-commerce-interface">
            <div className="card" style={styles.card}>
              <img
                src={eCommerceScreenshot}
                className="card-img-top"
                alt="E Commerce Interface"
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
