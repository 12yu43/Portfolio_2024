import pic from '../../assets/pic.jpeg';

export default function About() {
  return (
    <section className="about__main-container" id="about">
      <h3 className="title__content">About me</h3>

      <div className="about__content-container">
        <div className="about__image-container">
          <img
            className="about__image"
            alt="ariz_porfolio_Image"
            src={pic}
          />
        </div>
        <div className="about__text-content wow fadeInRight">
          <p className="about__text-title">Hello!</p>
          <p className="about__text">
            Web professional with two years of experience, delighted by the
            front-end and good practices. I enjoy supporting and contributing.
            Additionally, I have developed the ability to learn in a self-taught
            manner, which keeps me constantly up-to-date with the latest in
            technology. I've made some projects and you can watch my top
            projects{" "}
            <a className="about__link" href="#projects">
              here
            </a>{" "}
            or look my{" "}
            <a className="about__link" href="https://github.com/12yu43">
              github
            </a>{" "}
            where I have all my projects.
          </p>
        </div>
      </div>
    </section>
  );
}
