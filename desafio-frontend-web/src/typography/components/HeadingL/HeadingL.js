import PropTypes from 'prop-types';
import styles from './HeadingL.module.css'


function HeadingL({children, color}){
    return (
        <h2 className={`${color}-color ${styles.headingL_txt}`}>{children}</h2>
    );
}

HeadingL.propTypes = {
    children: PropTypes.node,
    color: PropTypes.string
}

HeadingL.defaultProps = {
    color: 'dark-medium'
}

export default HeadingL;