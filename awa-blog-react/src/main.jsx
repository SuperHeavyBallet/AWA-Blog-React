import React from 'react'
import ReactDOM from 'react-dom/client'

import HomePageConstructor from './pages/home/HomePageConstructor.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";




import CoachingPageConstructor from './pages/coaching/CoachingPageConstructor.jsx';
import ArticlesPageConstructor from './pages/articles/ArticlesPageConstructor.jsx';
import AboutPageConstructor from './pages/about/AboutPageConstructor.jsx';
import ExercisesPageConstructor from './pages/exercises/ExercisesPageConstructor.jsx';
import WorkoutsPageConstructor from './pages/workouts/WorkoutsPageConstructor.jsx';
import ReadyGoAppPageConstructor from './pages/readygoapp/ReadyGoAppPageConstructor.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageConstructor />,
  },
  {
    path: "articles",
    element: <ArticlesPageConstructor />,
  },
  {
    path: "exercises",
    element: <ExercisesPageConstructor />,
  },
  {
    path: "workouts",
    element: <WorkoutsPageConstructor />,
  },
  {
    path: "readygo",
    element: <ReadyGoAppPageConstructor />,
  },
  {
    path: "coaching",
    element: <CoachingPageConstructor />,
  },
  {
    path: "about",
    element: <AboutPageConstructor />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    
  </React.StrictMode>,
)
