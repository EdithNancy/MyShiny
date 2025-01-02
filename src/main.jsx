import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './pages/Home/Home';
import Survey from './pages/Survey/Survey';
import Error from './pages/Error/Error';
import NoMatch from './pages/NoMatch/NoMatch';
import Profile from './pages/Profile/Profile';
import ProfileDetails from './pages/ProfileDetails/ProfileDetails';
import Results from './pages/Result/Results';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/survey',
        element: <Survey />,
    },
    {
        path: '/Nomatch',
        element: <NoMatch />,
    },
    {
        path: '/profile',
        element: <Profile />,
    },
    {
        path: '/profile_detail',
        element: <ProfileDetails />,
    },
    {
        path: '/result',
        element: <Results />,
    },
    {
        path: '*',
        element: <Error />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
