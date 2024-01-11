import React from 'react'
import { HelmetProvider } from 'react-helmet-async';
import router from './Router/Router';
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <div>
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
