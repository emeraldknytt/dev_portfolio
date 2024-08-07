import { projectData } from "../../../data";
import Button from "../../layout/button/Button";
import ProjectCard from "../projectCard/ProjectCard";
import classes from "./Projects.module.css";

const Projects = () => {
  return (
    <section className={classes.project_container}>
      <div className={classes.project_title}>
        <h2>Projects</h2>
        <Button text={"CONTACT ME"} />
      </div>

      <div className={classes.project_cards}>
        {projectData.map((item, i) => {
          return (
            <ProjectCard
              img={item.img}
              title={item.title}
              tagOne={item.tagOne}
              tagTwo={item.tagTwo}
              tagThree={item.tagThree}
              key={i}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
 