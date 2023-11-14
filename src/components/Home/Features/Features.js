import {
  CustomizationShape,
  DeliveryShape,
  HandApprochShape,
  SupportShape,
  TikShape,
  UserShape,
} from "@/components/Shape";
import React from "react";

export default function Features() {
  return (
    <section id="features-area">
      <div className="container">
        <h5>Features</h5>
        <h2>Design that solves problems, one product at a time</h2>

        <div className="features-grid-content">
          <div className="item" data-aos="fade-up" data-aos-duration="1000">
            <span>
              <UserShape />
            </span>
            <h4>Uses Client First</h4>
            <p>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.{" "}
            </p>
          </div>
          <div className="item" data-aos="fade-up" data-aos-duration="1000">
            <span>
              <TikShape />
            </span>
            <h4>Two Free Revision Round</h4>
            <p>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.{" "}
            </p>
          </div>
          <div className="item" data-aos="fade-up" data-aos-duration="1000">
            <span>
              <CustomizationShape />
            </span>
            <h4>Template Customization</h4>
            <p>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.{" "}
            </p>
          </div>
          <div className="item" data-aos="fade-up" data-aos-duration="1000">
            <span>
              <SupportShape />
            </span>
            <h4>24/7 Support</h4>
            <p>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.{" "}
            </p>
          </div>
          <div className="item" data-aos="fade-up" data-aos-duration="1000">
            <span>
              <DeliveryShape />
            </span>
            <h4>Quick Delivery</h4>
            <p>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.{" "}
            </p>
          </div>
          <div className="item" data-aos="fade-up" data-aos-duration="1000">
            <span>
              <HandApprochShape />
            </span>
            <h4>Hands-on approach</h4>
            <p>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
