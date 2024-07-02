import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Router,
  Link
} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AboutPage } from '../src/pages/AboutPage/About';
import {PostsPage} from '../src/pages/PostsPage/Posts'

const router = createBrowserRouter([
  {
    path: '/start',
    element: (<App/>)
  },
  {
    path: '/about',
    element: (<AboutPage />)
  },
  {
    path: '/posts',
    element: (<PostsPage/>)
  }

])



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<RouterProvider router={router} />);

reportWebVitals();
