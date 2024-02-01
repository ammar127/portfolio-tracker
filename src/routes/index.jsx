import React, { lazy } from 'react';
import Loadable from './Loadable';
import { Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Layout from 'components/Layout';
import HomeLayout from '../components/Layout';

const Dashboard = Loadable(lazy(() => import('views/Dashboard/Dashboard')));
const Login = Loadable(lazy(() => import('views/Login/Login')));

const routes = [
    {
        path: '/',
        element: <ProtectedRoute> <HomeLayout /> </ProtectedRoute>,
        children: [
            { path: '/dashboard', exact: true, element: <Dashboard /> },

        ],
    },
    { path: '/auth', exact: true, element: <Login /> },


    { path: '*', element: <Navigate to="/dashboard" /> },


];

export default routes;
