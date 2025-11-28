import './style.css'
import {loadData, processData} from './fetch'
import { loadView } from './dom';
async function initApp() {
    const rawData = await loadData(); // On attend que le fetch soit fini
    if (rawData) {
        processData(rawData); // On passe le résultat nettoyé
    }
}

//initApp();

document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', e => {
    const view = e.target.dataset.view;
    loadView(view);
  });
});

//loadView('home');