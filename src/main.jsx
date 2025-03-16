import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // Komponent som tar seg av alle URL. App.jsx kjører, og skaper all nettsted innhold. Index.html kjører 
  // denne her main.jsx komponenten. 
  // https://www.geeksforgeeks.org/explain-the-purpose-of-the-browserrouter-and-route-components/
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
