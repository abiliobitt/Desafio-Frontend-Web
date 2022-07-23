import PropTypes from 'prop-types';
import styles from './HeadingS.module.css'

function HeadingS({children, color}){
    return (
        <h4 className={`${color}-color ${styles.headingS_txt}`}>{children}</h4>
    );
}

HeadingS.propTypes = {
    children: PropTypes.node,
    color: PropTypes.string
}

HeadingS.defaultProps = {
    color: 'dark-medium'
}

export default HeadingS;