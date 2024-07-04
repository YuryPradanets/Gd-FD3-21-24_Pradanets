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
import reportWebVitals from './reportWebVitals';
import { AboutPage } from '../src/pages/AboutPage/About';
import { StartPage } from '../src/pages/StartPage/Start';
import { PostsPage } from '../src/pages/PostsPage/Posts';
import { TermsPage } from './pages/TermsPage/Terms';

const router = createBrowserRouter([
  {
    path: '/',
    element: <StartPage/>
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/terms',
    element: <TermsPage/>
  },
  {
    path: '/posts',
    element: <PostsPage/>
  },
  // {
  //   path: ':id',
  //   element: (<TermsPage/>)
  // }
  

])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<RouterProvider router={router} />);

reportWebVitals();
