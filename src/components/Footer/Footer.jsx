import "./Footer.css";

export const Footer = () => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const todayString = today.toLocaleDateString();
  return <footer className="footer">{todayString}</footer>;
};
