import Link from "next/link";
import React from "react";

export default function HowWeWork() {
  return (
    <section id="how-we-work-area">
      <div className="container">
        <div className="how-we-work-wrapper">
          <div className="left-side">
            <h2>How we work</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <Link href={"/"}>
              Get in touch with us{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="12"
                  viewBox="0 0 25 12"
                  fill="none"
                >
                  <path
                    d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"
                    fill="#2405F2"
                  />
                </svg>
              </span>
            </Link>
          </div>
          <div className="right-side">
            <div className="box-group">
              <div className="box">
                <div className="number-box">
                  <span>01</span>
                </div>
                <h5>Strategy</h5>
                <p>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam .
                </p>
              </div>
              <div className="box">
                <div className="number-box">
                  <span>02</span>
                </div>
                <h5>Wireframing</h5>
                <p>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam .
                </p>
              </div>
              <div className="box">
                <div className="number-box">
                  <span>03</span>
                </div>
                <h5>Design</h5>
                <p>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam .
                </p>
              </div>
              <div className="box">
                <div className="number-box">
                  <span>04</span>
                </div>
                <h5>Development</h5>
                <p>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
