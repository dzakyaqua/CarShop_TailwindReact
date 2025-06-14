import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
// yang di atas PENTING
import LoginPage from './Pages/login.jsx';
import RegisterPage from './Pages/register.jsx';
import ErrorPages from './Pages/ErrorPages.jsx';
import ProductPages from './Pages/Products.jsx';
import DetailProductPage from './Pages/detailProduct.jsx';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import DarkModeProvider from './context/DarkMode.jsx';
import { TotalPriceProvider } from './context/TotalPriceContext.jsx';



const router = createBrowserRouter([
  {
    path:"/",
    element:<div>yahooo</div>,
    errorElement:<ErrorPages/>
  },
  {
    path:"/login",
    element:<LoginPage/>
  },
  {
    path:"/register",
    element:<RegisterPage/>
  },
  {
    path:"/Products",
    element:<ProductPages/>
  },
  {
    path:"/Product/:id",
    element:<DetailProductPage/>
}

  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <DarkModeProvider>
        <TotalPriceProvider>
          <RouterProvider router={router}/>
        </TotalPriceProvider>
      </DarkModeProvider>
    </Provider>    
  </StrictMode>,
)
