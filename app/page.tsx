import "remixicon/fonts/remixicon.css";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./components/Home";
import { Services } from "./components/Services";
import { AboutUs } from "./components/AboutUs";
import { Popular } from "./components/Popular";
import { Review } from "./components/Review";
import { Footer } from "./components/Footer";
import { ScrollUp } from "./components/ScrollUp";

export default function Home() {
  return (
    <>
      <NavBar />
      <HomePage />
      <Services />
      <AboutUs />
      <Popular />
      <Review />
      <Footer />
      <ScrollUp />
    </>
  );
}
