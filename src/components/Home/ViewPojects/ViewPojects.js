import Link from "next/link";
import React from "react";

export default function ViewPojects() {
  return (
    <section id="view-pojects-area">
      <div className="container">
        <div className="wrapper">
          <div className="head">
            <h1>View our projects</h1>
            <Link href={"/"}>
              View More{" "}
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
                    fill="#282938"
                  />
                </svg>
              </span>
            </Link>
          </div>

          <div
            className="poject-box-group"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="box box1">
              <Link href={"/"}>
                {" "}
                <img
                  className="img-fluid"
                  src="assets/pojects/poject1.png"
                  alt=""
                />
              </Link>

              <div className="text-content">
                <h6>Workhub office Webflow Webflow Design</h6>

                <Link href="/">
                  View project{" "}
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
                        fill="#FCD980"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
            <div className="box box2">
              <Link href={"/"}>
                <img
                  className="img-fluid"
                  src="assets/pojects/poject2.png"
                  alt=""
                />
              </Link>

              <div className="text-content">
                <h6>Unisaas Website Design</h6>
                <Link href="/">
                  View project{" "}
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
                        fill="#FCD980"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
            <div className="box box3">
              <Link href={"/"}>
                <img
                  className="img-fluid"
                  src="assets/pojects/poject3.png"
                  alt=""
                />
              </Link>

              <div className="text-content">
                <h6>Unisaas Website Design</h6>
                <Link href="/">
                  View project{" "}
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
                        fill="#FCD980"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
