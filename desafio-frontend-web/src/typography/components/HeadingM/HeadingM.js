import PropTypes from 'prop-types';
import styles from './HeadingM.module.css'


function HeadingM({children, color}){
    return (
        <h3 className={`${color}-color ${styles.headingM_txt}`}>{children}</h3>
    );
}

HeadingM.propTypes = {
    children: PropTypes.node,
    color: PropTypes.string
}

HeadingM.defaultProps = {
    color: 'dark-medium'
}

export default HeadingM;