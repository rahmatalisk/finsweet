import "@/styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Global/Navbar/Navbar.scss";
import "../components/Home/Hero/Hero.scss";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
