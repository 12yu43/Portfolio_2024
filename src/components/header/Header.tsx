import { Navbar } from "./Navbar";

export default function Header() {
  return (
    <header className="header__main-container">
      <Navbar />

      <div className="header__title-content">
        <h2 className="header__title-welcome">
          Welcome to my <span className="header__title-project">Portfolio</span>
        </h2>
        <p className="header__title-presentation">
          My name is <b>Deeksha Awasthi</b>
        </p>
        <a
          href="https://drive.google.com/file/d/1PehHhCfy9XyvaYo90n4xNWl4UAii95mY/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary btn-effect mt-2"
        >
          <span>Dowload CV</span>
        </a>
      </div>
    </header>
  );
}
