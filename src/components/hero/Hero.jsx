import Button from '../../layout/button/Button.jsx';
import classes from './Hero.module.css';
import hero_image from '../../assets/hero_image.svg'
import oval from '../../assets/oval.svg'
import circles from '../../assets/circles1.svg'

const Hero = () => {
    return(
        <section className={classes.hero_container}>
            
            <div className={classes.circles_div}>
                <img src={circles} alt="Circles 1" className={classes.circles} />
            </div>
            
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

            <img src={hero_image} alt="Hero Image" className={classes.hero_image}/>
            
            <div className={classes.images}>
                <img src={oval} alt="Oval" className={classes.oval}/>
            </div>
        </section>
    )
}

export default Hero;