
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { TitleCardProvider } from './Context/TitleCardContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <TitleCardProvider>
      <App />
    </TitleCardProvider>
  </BrowserRouter>

)
