import { ProjectCard } from "./ProjectCard";
import pic1 from  "../../assets/pic1.png";
import pic2 from  "../../assets/pic2.png";
import pic3 from  "../../assets/pic3.png";
import pic4 from  "../../assets/pic4.png";
import pic5 from  "../../assets/pic5.png";

export default function Projects() {
  return (
    <section className="projects__main-container" id="projects">
      <h3 className="title__content">Projects</h3>

      <div className="projects__cards-container mt-3">
        <ProjectCard
          title="Eternally me"
          image={pic1}
          linkDemo="https://eternallyme.com"
        />

        <ProjectCard
          title="fee way"
          image={pic2}
          linkDemo="https://feeway.in/"
        />

        <ProjectCard
          title="Home Maintenances"
          image={pic3}
          linkDemo="https://www.homemaintenances.com/"
        />

        <ProjectCard
          title="Beris Magic"
          image={pic5}
          linkDemo="https://berismagic.in/"
        />

        <ProjectCard
          title="ITD "
          image={pic4}
          linkDemo="https://itdsupercharge.com/"
        />
      </div>
    </section>
  );
}
