import React from "react";
import "./Contact.css";

import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

export default function Contact() {
  return (
    <section
      className="c-wrapper"
      id="contact"
      style={{
        // background: "linear-gradient(to right, #F2EEEB 22%, #1ACDE5 78%)",
        // background: "linear-gradient(to right, #F2EEEB 50%, #1ACDE5 50%)",
        // background: "radial-gradient(circle closest-corner, #F2EEEB 50%, #1ACDE5 50%)",
        // background: "linear-gradient(to right, #F2EEEB 50%, #1ACDE5 50%)",
        // background: "linear-gradient(to right, #F2EEEB 30%, #1ACDE5 30%)",
        // background: "radial-gradient(circle, #F2EEEB 50%, #1ACDE5 50%)",
        // background: "radial-gradient(circle, #F2EEEB 30%, #1ACDE5 70%)",
        // background: "radial-gradient(ellipse, #F2EEEB 50%, #1ACDE5 50%)",
        // background: "linear-gradient(45deg, #F2EEEB 50%, #1ACDE5 50%)",
        // background: "linear-gradient(to bottom, #F2EEEB 50%, #1ACDE5 50%)",
        // background: "radial-gradient(circle farthest-corner, #F2EEEB 50%, #1ACDE5 50%)",
        // background: "linear-gradient(to right, #1ACDE5 50%, #F2EEEB 50%)",
        // background: "radial-gradient(circle, #F2EEEB 20%, #1ACDE5 80%)",
        // background: "linear-gradient(to right, #F2EEEB 40%, #1ACDE5 60%)",
        // background: "conic-gradient(from 4deg at 65% 50%, #F2EEEB 50%, #1ACDE5 50%)",
        // background: "radial-gradient(circle closest-side, #F2EEEB 50%, #1ACDE5 50%)",
        
        
      }}
    >
      <div className="paddings flexCenter innerWidth contact-container "
      >
        <div className="c-left flexColStart">
          <span className="orangeText">Our Contact Us</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. We
            beleive a good blace
            <br /> to live can make your life better
          </span>

          <div className="flexColStart contactModes">
            {/* First Row */}
            <div className="row flexStart">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="icon flexCenter">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="button flexCenter">Call Now</div>
              </div>

              {/* Second Mode */}

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="icon flexCenter">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="button flexCenter">Chat Now</div>
              </div>
            </div>

            {/* Second Row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="icon flexCenter">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="button flexCenter">Video Call Now</div>
              </div>

              {/* Second Mode */}

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="icon flexCenter">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="button flexCenter">Message Now</div>
              </div>
            </div>
          </div>
        </div>

        <div className="r-left">
          <div className="image-container">
            <img src="./contact.jpg" alt="contactImage" />
          </div>
        </div>
      </div>
    </section>
  );
}
