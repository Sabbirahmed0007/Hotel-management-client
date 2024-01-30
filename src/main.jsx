import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {  RouterProvider,} from "react-router-dom";
import Routes from './Routes/Routes.jsx';
import AuthProviders from './Providers/AuthProviders.jsx';
import toast, { Toaster } from 'react-hot-toast';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <Toaster></Toaster>
      <RouterProvider router={Routes}></RouterProvider>
    </AuthProviders>
  </React.StrictMode>,
)
