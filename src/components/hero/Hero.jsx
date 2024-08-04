import Button from 'c:/Users/lawal/Desktop/Workspace/developerPort/src/layout/button/button';
import classes from './Hero.module.css';
import hero_image from '../../assets/hero_image.svg'
import oval from '../../assets/oval.svg'

const Hero = () => {
    return(
        <section className={classes.hero_container}>
            <div className={classes.hero_content}>
                <h1>
                    Nice to meet you! <br/>  I'm <span>Adam Keyes</span>.
                </h1>
                <p>
                    Based in the UK, I am a frontend developer 
                    passionate about building accessible web apps that users love.
                </p>
                <div className={classes.button}>
                    <Button text={'CONTACT US'}/>
                </div>
               
            </div>

            <div className={classes.hero_image_container}>
                <img src={hero_image} alt="Hero Image" className={classes.hero_image}/>
                <img src={oval} alt="Oval" className={classes.oval}/>
            </div>
        </section>
    )
}

export default Hero;