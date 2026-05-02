import { resumo } from '../data/dados'
import styles from './Cards.module.css'

function Cards() {
    return (
        <div className={styles.grid}>
            <div className={`${styles.card} ${styles.saldo}`}>
                <span className={styles.label}>💰 Saldo Atual</span>
                <strong className={styles.valor}>
                    R$ {resumo.saldo.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </strong>
            </div>
            <div className={`${styles.card} ${styles.receitas}`}>
                <span className={styles.label}>📈 Receitas</span>
                <strong className={styles.valor}>
                    R$ {resumo.receitas.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </strong>
            </div>
            <div className={`${styles.card} ${styles.despesas}`}>
                <span className={styles.label}>📉 Despesas</span>
                <strong className={styles.valor}>
                    R$ {resumo.despesas.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </strong>
            </div>
        </div>
    )
}

export default Cards;