import classes from './Header.module.css';
import github from '../../assets/github.svg';
import frontend from '../../assets/frontend.svg';
import linkedIn from '../../assets/linkedIn.svg';
import twitter from '../../assets/twitter.svg';


const Header = () => {
    return (
        <header>
            <h2 className = {classes.heading}>adamkeyes</h2>
            <div className = {classes.icons}>
            <img src={github} alt='github' />
            <img src={frontend} alt='frontend_mentor' />
            <img src={linkedIn} alt='linkedIn' />
            <img src={twitter} alt='twitter' />
            </div>
        </header>
    )
}

export default Header;

