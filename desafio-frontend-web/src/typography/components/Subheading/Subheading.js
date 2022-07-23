import PropTypes from 'prop-types';
import styles from './Subheading.module.css';


function Subheading({children, color}){
    return (
        <h6 className={`${color}-color ${styles.subheading_txt}`}>{children}</h6>
    );
}

Subheading.propTypes = {
    children: PropTypes.node,
    color: PropTypes.string
}

Subheading.defaultProps = {
    color: 'dark-medium'
}

export default Subheading;