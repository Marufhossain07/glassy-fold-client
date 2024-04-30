import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './layouts/Home/Home.jsx';
import Error from './layouts/Error.jsx';
import Root from './layouts/Root/Root.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import Register from './layouts/Register.jsx';
import Login from './layouts/Login.jsx';
import AddCraft from './layouts/AddCraft.jsx';
import MyCrafts from './layouts/MyCrafts.jsx';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes.jsx';
import Update from './layouts/Update.jsx';
import Details from './layouts/Details.jsx';
import AllCrafts from './layouts/AllCrafts.jsx';
import Sub from './layouts/Sub.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/addCraft',
        element: <PrivateRoutes>
          <AddCraft></AddCraft>
        </PrivateRoutes>
      },
      {
        path: '/myCraft',
        element: <PrivateRoutes>
          <MyCrafts></MyCrafts>
        </PrivateRoutes>
      },
      {
        path: '/update/:id',
        element: <PrivateRoutes>
          <Update></Update>
        </PrivateRoutes>,
        loader: ({params})=> fetch(`https://glassy-fold-server.vercel.app/items/${params.id}`)
      },
      {
        path:'/items/:id',
        element: <PrivateRoutes>
          <Details></Details>
        </PrivateRoutes>,
        loader: ({params})=> fetch(`https://glassy-fold-server.vercel.app/items/${params.id}`)
      },
      {
        path:'/allCrafts',
        element: <AllCrafts></AllCrafts>
      },
      {
        path: '/subCategory/:sub',
        element: <Sub></Sub>,
        loader: ({params})=>fetch(`https://glassy-fold-server.vercel.app/items-from-sub/${params.sub}`)
      }

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
