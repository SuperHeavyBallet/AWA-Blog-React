import React from 'react'
import ReactDOM from 'react-dom/client'

import HomePageConstructor from './HomePageConstructor.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import ArticlesPage from './pages/ArticlesPage.jsx';
import ExercisesPage from './pages/ExercisesPage.jsx';
import WorkoutsPage from './pages/WorkoutsPage.jsx';
import ReadyGoAppPage from './pages/ReadyGoAppPage.jsx';
import CoachingPage from './pages/CoachingPage.jsx';
import AboutPage from './pages/AboutPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageConstructor />,
  },
  {
    path: "articles",
    element: <ArticlesPage />,
  },
  {
    path: "exercises",
    element: <ExercisesPage />,
  },
  {
    path: "workouts",
    element: <WorkoutsPage />,
  },
  {
    path: "readygo",
    element: <ReadyGoAppPage />,
  },
  {
    path: "coaching",
    element: <CoachingPage />,
  },
  {
    path: "about",
    element: <AboutPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    
  </React.StrictMode>,
)
