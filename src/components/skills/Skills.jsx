import SkillCard from '../skills-card/SkillCard';
import classes from './Skills.module.css'
import circles from '../../assets/circles2.svg'

const Skills = () => {
    return (
        <section className={classes.skills_container}>
            <SkillCard title='HTML' text='4 Years Experience'/>
            <SkillCard title='CSS' text='4 Years Experience'/>
            <SkillCard title='Javascript' text='4 Years Experience'/>
            <SkillCard title='Accessibility' text='4 Years Experience'/>
            <SkillCard title='React' text='3 Years Experience'/>
            <SkillCard title='Sass' text='3 Years Experience'/>

            <div className={classes.circles_div}>
                <img src={circles} alt="circles 2" />
            </div>
        </section>
    )
}

export default Skills;