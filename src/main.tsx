import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Trends from './components/trends/Trends';
import { Provider } from 'react-redux';
import { store } from './store/store';

const router = createBrowserRouter([
  {
    path: '/find-gifs/',
    element: <Trends />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);