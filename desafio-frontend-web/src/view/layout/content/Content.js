import PropTypes from 'prop-types';
import styles from './Content.module.css';

function Content({children}) {
    return (
        <div className={styles.Content}>{children}</div>
    );
}

Content.propTypes = {
    children: PropTypes.node
}

export default Content;