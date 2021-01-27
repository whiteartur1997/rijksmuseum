import preloader from './../../assets/Spinner.svg';
import classes from './Preloader.module.css';

const Preloader = () => {
    return(
        <img className={classes.preloader} src={preloader} alt="preloader" />
    )
}

export default Preloader;