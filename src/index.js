import './style.css'
import {loadData, processData} from './fetch'

async function initApp() {
    const rawData = await loadData(); // On attend que le fetch soit fini
    if (rawData) {
        processData(rawData); // On passe le résultat nettoyé
    }
}

initApp();