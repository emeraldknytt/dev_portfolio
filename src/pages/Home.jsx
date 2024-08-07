import Hero from "../components/hero/Hero";
import Header from "../layout/header/Header";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";

const Home = () => {
    return(
        <div>
            <Header/>
            <Hero/>
            <Skills/>
            <Projects/>
            <Contact/>
        </div>
    )
}

export default Home;
