import HeadingM from '../../../typography/components/HeadingM/HeadingM'
import Card from '../card/Card'
import styles from './StatusSuccess.module.css'

export default function StatusSuccess(){
    return (
        <Card className={styles.StatusSuccess}>
            <HeadingM color="dark-high">Obrigado por avaliar nossos serviços!</HeadingM>
        </Card>
    )
}