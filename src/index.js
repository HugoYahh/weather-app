import './style.css'
import { loadData, processData } from './fetch'
import { loadView, renderHome } from './dom';

async function initApp(value) {
    const rawData = await loadData(value);
    if (!rawData) return null;
    return processData(rawData);
}

window.addEventListener("DOMContentLoaded", () => {

    document.addEventListener('submit', async (e) => {
        if (e.target && e.target.id === 'form') {
            e.preventDefault();

            const searchInput = e.target.querySelector('#search');
            
            if (searchInput) {
                const value = searchInput.value.trim().toLowerCase();
                console.log(value);

                const city = value === "" ? "chatou" : value;
                const data = await initApp(city);
                
                if(data) {
                    renderHome(data);
                }
            }
        }
    });

    initApp("chatou").then(renderHome);
});

document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', e => {
    const view = e.target.dataset.view;
    loadView(view);
  });
});