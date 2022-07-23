import styles from './Card.module.css';

function Card({children, className}) {
    return (
        <div className={`${styles.Card} ${className}`}>{children}</div>
    );
}

export default Card;