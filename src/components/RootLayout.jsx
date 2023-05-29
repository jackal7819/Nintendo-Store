import { useState } from 'react';
import Header from './Header';

const RootLayout = ({ component: Component }) => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <div className='root'>
            <Header searchValue={searchValue} setSearchValue={setSearchValue} />
            <main className='content'>
                <div className='container'>
                    <Component searchValue={searchValue} />
                </div>
            </main>
        </div>
    );
};

export default RootLayout;
