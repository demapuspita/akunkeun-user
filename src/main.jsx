import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import './App.css'
import MyForm from './components/perjadin';
import ResultPage from './components/kegiatanku-perjadin';
import Kegiatan from './components/kegiatan';
import Fasilitas from './components/fasilitas';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/beranda",
    element: <App/>,
  },
  {
    path: "/perjadin",
    element: <MyForm/>,
  },
  {
    path: "/result",
    element: <ResultPage/>,
  },
  {
    path: "/kegiatan",
    element: <Kegiatan/>,
  },
  {
    path: "/fasilitas",
    element: <Fasilitas/>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
