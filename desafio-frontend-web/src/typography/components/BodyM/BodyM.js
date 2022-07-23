import PropTypes from 'prop-types';
import styles from './BodyM.module.css';


function BodyM({children, color, bold}){
    return (
        <p className={`${color}-color ${bold ? styles.bodyM_txt_bold : styles.bodyM_txt} `}>{children}</p>
    );
}

BodyM.propTypes = {
    children: PropTypes.node,
    color: PropTypes.string,
    bold: PropTypes.bool
}

BodyM.defaultProps = {
    color: 'dark-medium',
    bold: false
}

export default BodyM;