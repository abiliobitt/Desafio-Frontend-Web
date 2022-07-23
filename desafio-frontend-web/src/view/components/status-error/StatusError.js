import HeadingM from '../../../typography/components/HeadingM/HeadingM'
import Card from '../card/Card'
import styles from './StatusError.module.css'

export default function StatusError(){
    return (
        <Card className={styles.StatusError}>
            <HeadingM color="dark-high">Ops! Ocorreu um erro ao enviar sua avaliação. Por favor, tente novamente a seguir.</HeadingM>
        </Card>
    )
}