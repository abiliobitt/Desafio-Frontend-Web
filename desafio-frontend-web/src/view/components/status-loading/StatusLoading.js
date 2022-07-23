import HeadingM from '../../../typography/components/HeadingM/HeadingM'
import Card from '../card/Card'
import styles from './StatusLoading.module.css'

export default function StatusLoading(){
    return (
        <Card className={styles.StatusLoading}>
            <HeadingM color="dark-high">Aguarde estamos processando...</HeadingM>
        </Card>
    )
}