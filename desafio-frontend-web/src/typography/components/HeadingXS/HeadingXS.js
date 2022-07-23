import PropTypes from 'prop-types';
import styles from './HeadingXS.module.css';

function HeadingXS({children, color}){
    return (
        <h5 className={`${color}-color ${styles.headingXS_txt}`}>{children}</h5>
    );
}

HeadingXS.propTypes = {
    children: PropTypes.node,
    color: PropTypes.string
}

HeadingXS.defaultProps = {
    color: 'dark-medium'
}

export default HeadingXS;