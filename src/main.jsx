import {createRoot} from "react-dom/client"
import App from "./App"


const root = createRoot(document.querySelector("#root"))
root.render(
  <App />
)





// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
