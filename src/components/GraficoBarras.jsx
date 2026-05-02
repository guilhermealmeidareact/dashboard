import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { gastosPorMes } from '../data/dados'
import styles from './GraficoBarras.module.css'

function GraficoBarras() {
    return (
        <div className={styles.card}>
            <h3 className={styles.titulo}>Gastos por Mês</h3>
            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={gastosPorMes}>
                    <XAxis dataKey="mes" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                   <Tooltip
                    contentStyle={{
                        backgroundColor: '#1e293b',
                        border: '1px solid #334155',
                        borderRadius: '8px',
                        color: '#fff'
                    }}
                    labelStyle={{ color: '#94a3b8' }}
                    formatter={valor => [`R$ ${valor}`, 'Gastos']}
                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                />
                    <Bar dataKey="valor" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default GraficoBarras;