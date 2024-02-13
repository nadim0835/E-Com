import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import './index.css'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './Componests/RootLayout.jsx';
import About from './Componests/About.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"element={<RootLayout />}>
      <Route index element={<Home/>} />
      <Route path='/about' element={<About/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
