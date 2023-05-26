import Header from './Header';

const RootLayout = ({ component: Component }) => {
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
