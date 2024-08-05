import classes from './ProjectCard.module.css';

const ProjectCard = ({img, title, tagOne, tagTwo, tagThree}) => {
    return(
        <section className={classes.project_card}>
            <img src={img} alt="title" />

            <h3>{title}</h3>

            <div className={classes.tags}>
                <p>{tagOne}</p>
                <p>{tagTwo}</p>
                <p>{tagThree}</p>
            </div>
        </section>
    )
}

export default ProjectCard;