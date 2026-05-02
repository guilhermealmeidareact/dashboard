import { transacoes } from '../data/dados'
import styles from './Transacoes.module.css'

function Transacoes() {
    return (
        <div className={styles.card}>
            <h3 className={styles.titulo}>Transações Recentes</h3>
            <div className={styles.lista}>
                {transacoes.map(t => (
                    <div key={t.id} className={styles.item}>
                        <div className={styles.info}>
                            <span className={styles.descricao}>{t.descricao}</span>
                            <span className={styles.data}>{t.data}</span>
                        </div>
                        <span className={t.tipo === 'receita' ? styles.receita : styles.despesa}>
                            {t.tipo === 'receita' ? '+' : ''}
                            R$ {Math.abs(t.valor).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Transacoes;