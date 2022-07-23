import styles from './Header.module.css';
import { ReactComponent as Logo } from '../../../assets/images/serasa-logo-white.svg';

export default function Header(){
    return (
        <div className={styles.Header}>
            <a href="https://www.serasa.com.br/"><Logo className={styles.Header_logo}/></a>
        </div>
    );
}