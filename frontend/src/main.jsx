import App from './App.jsx'
import ShopContextProvider from './context/ShopContext.jsx'
import './index.css'
import ReactDOM from'react-dom/client'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <ShopContextProvider>
    <App/>
 </ShopContextProvider>
   
 </BrowserRouter>
)
