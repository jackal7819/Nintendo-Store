import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Nothing from './pages/Nothing';
import Cart from './pages/Cart';
import Home from './pages/Home';
import './scss/app.scss';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout component={Home} />,
    },
    {
        path: '/cart',
        element: <RootLayout component={Cart} />,
    },
    {
        path: '*',
        element: <RootLayout component={Nothing} />,
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
