import { Outlet } from 'react-router-dom';
import Header from './Header';

const RootLayout = () => {
    return (
        <div className='root'>
            <Header />
            <main className='content'>
                <div className='container'>
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default RootLayout;
