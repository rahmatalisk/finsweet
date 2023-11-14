import Link from "next/link";
import React from "react";
import { Accordion } from "react-bootstrap";

export default function Frequently() {
  const questions = [
    {
      text: "How much time does it take?",
    },
    {
      text: "What is your class naming convention?",
    },
    {
      text: "How do you communicate?",
    },
    {
      text: "I have a bigger project. Can you handle it?",
    },
    {
      text: "What is your class naming convention?",
    },
  ];
  return (
    <section id="frequently-area">
      <div className="container">
        <div className="frequently-wrapper">
          <div className="left-side">
            <h1>Frequently asked questions</h1>
            <Link href={"contact"}>Contact us for more info</Link>
          </div>
          <div className="right-side">
            <Accordion defaultActiveKey={0}>
              {questions.map((item, i) => (
                <Accordion.Item
                  eventKey={i}
                  key={i}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <Accordion.Header>
                    <h6>
                      <span>0{i + 1}</span> {item.text}
                    </h6>
                  </Accordion.Header>
                  <Accordion.Body className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
