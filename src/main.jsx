// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import './index.css'
import App from './App.jsx'

// Font Awesome CSS 적용 이슈 해결
config.autoAddCss = false

createRoot(document.getElementById('root')).render(
    // <StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    // </StrictMode>,
)