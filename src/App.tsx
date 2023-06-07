import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Nothing from './pages/Nothing';
import FullCard from './pages/FullCard';
import Home from './pages/Home';
import Cart from './pages/Cart';
import './scss/app.scss';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout component={Home} />,
        errorElement: <RootLayout component={Nothing} />,
    },
    {
        path: '/cart',
        element: <RootLayout component={Cart} />,
    },
    {
        path: 'card/:id',
        element: <RootLayout component={FullCard} />,
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;