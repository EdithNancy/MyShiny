import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './pages/Home/Home';
import Survey from './pages/Survey/Survey';
import FreelanceForm from './components/QuestionForm/FreelanceForm';
import ClientForm from './components/QuestionForm/ClientForm';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/survey',
        element: <Survey />,
        children: [
            {
                path: 'client',
                element: <ClientForm />,
            },
            {
                path: 'freelance',
                element: <FreelanceForm />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
