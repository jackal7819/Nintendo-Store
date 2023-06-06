import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import FullCard from './components/FullCard';
import Nothing from './pages/Nothing';
import Home from './pages/Home';
import Cart from './pages/Cart';
import './scss/app.scss';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'cart', element: <Cart /> },
            { path: 'card/:id', element: <FullCard /> },
            { path: '*', element: <Nothing /> },
        ],
    },
]);

const App = () => {
    return (
        <RouterProvider router={router}>
            <Outlet />
        </RouterProvider>
    );
};

export default App;
