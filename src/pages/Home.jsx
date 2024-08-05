import Hero from "../components/hero/Hero";
import Header from "../layout/header/Header";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";

const Home = () => {
    return(
        <div>
            <Header/>
            <Hero/>
            <Skills/>
            <Projects/>
        </div>
    )
}

export default Home;
