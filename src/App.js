import { useEffect, useState } from 'react';
import Card from './components/Card';
import Sceleton from './components/Sceleton';
import Categories from './components/Categories';
import Header from './components/Header';
import Sort from './components/Sort';
import './scss/app.scss';

const App = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(
            'https://nintendo-store-default-rtdb.europe-west1.firebasedatabase.app/data.json'
        )
            .then((response) => response.json())
            .then((data) => {
                setItems(data);
                setLoading(false);
            });
    }, []);

    return (
        <div className='App'>
            <Header />
            <main className='content'>
                <div className='container'>
                    <div className='content__top'>
                        <Categories />
                        <Sort />
                    </div>
                    <h2 className='content__title'>Nintendo Switch games</h2>
                    <div className='content__items'>
                        {!loading &&
                            items.map((game) => (
                                <Card key={game.id} {...game} />
                            ))}
                        {loading &&
                            [...new Array(4)].map((_, index) => (
                                <Sceleton key={index} />
                            ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default App;
