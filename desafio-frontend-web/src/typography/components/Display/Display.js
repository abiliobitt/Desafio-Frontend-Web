import PropTypes from 'prop-types';
import styles from './Display.module.css';

function Display({children, color}){
    return (
        <h1 className={`${color}-color ${styles.display_txt}`}>{children}</h1>
    );
}

Display.propTypes = {
    children: PropTypes.node,
    color: PropTypes.string
}

Display.defaultProps = {
    color: 'dark-medium'
}

export default Display;