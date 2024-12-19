import { handleSearch } from './js/app';
import './styles/style.scss';

// Add an event listener to handle form submission
document.getElementById('travel-form').addEventListener('submit', (event) => {
    event.preventDefault();
    handleSearch();
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
        .then(() => console.log('Service Worker Registered'))
        .catch((error) => console.log('Service Worker Registration Failed:', error));
}



