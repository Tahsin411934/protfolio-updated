import React from 'react';
import ReactDOM from 'react-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Root from './Root/Root.jsx';
import Home from './Pages/Home/Home.jsx';
// import Service from './Components/Services/Service.jsx'; // Import Service component
import ThemeProvider from './Components/Provider/ThemeProvider.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import Services from './Components/Services/Services.jsx';
import Projects from './Components/Projects/Projects.jsx';
import Contract from './Components/Contract/Contract.jsx';
import Skills from './Components/Skills/Skills.jsx';
import Education from './Components/Education/Education.jsx';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/services",
        element: <Services /> 
      },
      {
        path: "/projects",
        element: <Projects></Projects> 
      },
      {
        path: "/contract",
        element: <Contract></Contract> 
      },
      {
        path: "/skills",
        element: <Skills></Skills>
      },
      {
        path: "/education",
        element: <Education></Education>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
