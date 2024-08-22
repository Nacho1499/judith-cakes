import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from "./Contact.jsx";
import Gallery from './Gallery.jsx';
import Order from './Order.jsx';
import About from './About.jsx';
import Productsall from './Productsall.jsx';
import Event from './Event.jsx';


const router= createBrowserRouter([
  {path:"/", element:<App/>},
  {path:"/contact", element:<Contact/>},
  {path:"/gallery", element:<Gallery/>},
  {path:"/order", element:<Order/>},
  {path:"/about", element:<About/>},
  {path:"/products",element:<Productsall/>},
  {path:"/event",element:<Event/>},
  
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router}/>
    
   
  </StrictMode>,
)
