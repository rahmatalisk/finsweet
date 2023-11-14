import "@/styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Global/Navbar/Navbar.scss";
import "../components/Home/Hero/Hero.scss";
import "../components/Home/HowWeWork/HowWeWork.scss";
import "../components/Home/ViewPojects/ViewPojects.scss";
import "../components/Home/Features/Features.scss";
import "../components/Home/OurBlog/OurBlog.scss";
import "../components/Home/Frequently/Frequently.scss";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 1000,
      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return <Component {...pageProps} />;
}
