import BodyM from '../../../typography/components/BodyM/BodyM';
import styles from './Footer.module.css';

export default function Footer(){
    return (
        <div className={styles.Footer}>
            <BodyM>Coded by <a href="https://www.linkedin.com/in/pedro-nicolau-arcuri/" className={styles.Footer_anchor}>Pedro Nicolau Arcuri</a></BodyM>
        </div>
    );
}