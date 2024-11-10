import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import Main from './layout/Main.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Signin from './components/Signin.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {path: '/',
        element: <Home></Home>
      },
      {path: '/login',
        element: <Login></Login>
      },
      {path: '/signup',
        element: <Signup></Signup>
      },
      {path: '/signin',
        element: <Signin></Signin>
      }
    ]
  },
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)
