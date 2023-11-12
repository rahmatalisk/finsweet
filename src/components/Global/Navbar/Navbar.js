import { Logo } from "@/components/Shape";
import Link from "next/link";
import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { IoCloseCircleOutline, IoMenu } from "react-icons/io5";

export default function Navbar() {
  const [activeNav, setActiveNav] = useState("Home");
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About us", link: "/" },
    { name: "Features", link: "/" },
    { name: "Pricing", link: "/" },
    { name: "FAQ", link: "/" },
    { name: "Blog", link: "/" },
  ];

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div id="header-area">
      <div className="container">
        <div className="navbar-wrapper">
          <div className="logo">
            <Link href={"/"}>
              <Logo />
            </Link>
          </div>
          <nav>
            <ul>
              {navItems.map((item, i) => (
                <li key={i}>
                  <Link
                    onClick={() => setActiveNav(item.name)}
                    className={`${activeNav === item.name && "activeNav"}`}
                    href={item.link}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <button className="contact-btn">Contact us</button>
              </li>
            </ul>
          </nav>

          <div className="small-nav">
            <IoMenu onClick={handleShow} color="#FFF" size={32} />
            <>
              <Offcanvas
                className="mobile-menu"
                show={show}
                onHide={handleClose}
                placement="end"
              >
                <Offcanvas.Header>
                  <Offcanvas.Title>Menu</Offcanvas.Title>

                  <IoCloseCircleOutline
                    color="#FFF"
                    size={32}
                    onClick={handleClose}
                  />
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <div className="mobile-nav">
                    <ul>
                      {navItems.map((item, i) => (
                        <li key={i}>
                          <Link
                            onClick={() => setActiveNav(item.name)}
                            className={`${
                              activeNav === item.name && "activeNav"
                            }`}
                            href={item.link}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <button className="contact-btn">Contact us</button>
                      </li>
                    </ul>
                  </div>
                </Offcanvas.Body>
              </Offcanvas>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}
