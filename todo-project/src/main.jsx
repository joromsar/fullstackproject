import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Navbar from './components/dashboard_navbar.jsx';
import Login from './components/login.jsx'
import ManageTasks from './components/manage_tasks.jsx';
import Edit_Task from './components/edit_task.jsx';



const router = createBrowserRouter([
  {
    path:"/",
    element:<Navbar />,
    children:[
      {
        path:"dashboard",
        element:<ManageTasks />,
      },
      {
        path:"/edit-task/:id",
        element:<Edit_Task />,
      },
      {
        path:"/delete-task",
        element:<Login />,
      },
    ]
  },

  {
    path:"/login",
    element:<Login />,
  },
  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
