import { FC, ComponentType } from 'react';
import Header from './Header';

interface RootLayoutProps {
    component: ComponentType;
}

const RootLayout: FC<RootLayoutProps> = ({ component: Component }) => {
    return (
        <div className='root'>
            <Header />
            <main className='content'>
                <div className='container'>
                    <Component />
                </div>
            </main>
        </div>
    );
};

export default RootLayout;
