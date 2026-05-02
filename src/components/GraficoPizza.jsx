import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { gastosPorCategoria } from '../data/dados'
import styles from './GraficoPizza.module.css'

const CORES = ['#3b82f6', '#e94560', '#10b981', '#f59e0b', '#8b5cf6', '#06b6d4']

function GraficoPizza() {
    return (
        <div className={styles.card}>
            <h3 className={styles.titulo}>Gastos por Categoria</h3>
            <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                    <Pie
                        data={gastosPorCategoria}
                        dataKey="valor"
                        nameKey="categoria"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                    >
                        {gastosPorCategoria.map((_, index) => (
                            <Cell key={index} fill={CORES[index % CORES.length]} />
                        ))}
                    </Pie>
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#1e293b',
                            border: '1px solid #334155',
                            borderRadius: '8px',
                            color: '#fff'
                        }}
                        formatter={valor => [`R$ ${valor}`, '']}
                    />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default GraficoPizza;