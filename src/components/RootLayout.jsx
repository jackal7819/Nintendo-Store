import { useState, createContext } from 'react';
import Header from './Header';

export const SearchContext = createContext('');

const RootLayout = ({ component: Component }) => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
            <div className='root'>
                <Header />
                <main className='content'>
                    <div className='container'>
                        <Component />
                    </div>
                </main>
            </div>
        </SearchContext.Provider>
    );
};

export default RootLayout;
