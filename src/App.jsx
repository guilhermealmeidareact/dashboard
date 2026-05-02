import Cards from './components/Cards'
import GraficoBarras from './components/GraficoBarras'
import GraficoPizza from './components/GraficoPizza'
import Transacoes from './components/Transacoes'
import styles from './App.module.css'

function App() {
    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>📊 Dashboard Financeiro</h1>
            <Cards />
            <div className={styles.graficos}>
                <GraficoBarras />
                <GraficoPizza />
            </div>
            <Transacoes />
        </div>
    )
}

export default App;