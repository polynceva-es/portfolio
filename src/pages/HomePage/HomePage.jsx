import "./HomePage.css";
import { Header } from "../../components/Header/Header";
import { AboutBlock } from "../../components/AboutBlock/AboutBlock";
import { Navigation } from "../../components/Navigation/Navigation";

export const HomePage = () => {
  return (
    <div className="homePage">
      <Header />
      <AboutBlock />
      <Navigation />
    </div>
  );
};
