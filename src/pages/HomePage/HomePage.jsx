import "./HomePage.css";
import { Header } from "../../components/Header/Header";
import { AboutBlock } from "../../components/AboutBlock/AboutBlock";
import { Navigation } from "../../components/Navigation/Navigation";
import { Footer } from "../../components/Footer/Footer";

export const HomePage = () => {
  return (
    <div className="homePage">
      <Header />
      <AboutBlock />
      <Navigation />
      <Footer />
    </div>
  );
};
