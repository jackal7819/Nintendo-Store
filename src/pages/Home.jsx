import { useEffect, useState } from 'react';
import Card from '../components/Card';
import Sceleton from '../components/Sceleton';
import Categories from '../components/Categories';
import Sort from '../components/Sort';

const Home = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categoryName, setCategoryName] = useState('All');
    const [sortType, setSortType] = useState('Popularity');

    useEffect(() => {
        setLoading(true);
        fetch(
            'https://nintendo-store-default-rtdb.europe-west1.firebasedatabase.app/data.json'
        )
            .then((response) => response.json())
            .then((data) => {
                setItems(data);
                setLoading(false);
            });
        window.scrollTo(0, 0);
    }, []);

    const sortFunctions = {
        Popularity: (a, b) => b.rating - a.rating,
        'Price (low to high)': (a, b) => a.price - b.price,
        'Price (high to low)': (a, b) => b.price - a.price,
        'Title (A-Z)': (a, b) => a.title.localeCompare(b.title),
        'Title (Z-A)': (a, b) => b.title.localeCompare(a.title),
    };

    const filteredItems = (
        categoryName === 'All'
            ? items
            : items.filter((game) => game.category === categoryName)
    ).sort(sortFunctions[sortType] || ((a, b) => 0));

    return (
        <>
            <div className='content__top'>
                <Categories
                    value={categoryName}
                    categoryHandler={(name) => setCategoryName(name)}
                />
                <Sort
                    value={sortType}
                    sortTypeHandler={(name) => setSortType(name)}
                />
            </div>
            <h2 className='content__title'>Nintendo Switch games</h2>
            <div className='content__items'>
                {!loading &&
                    filteredItems
                        .slice()
                        .map((game) => <Card key={game.id} {...game} />)}
                {loading &&
                    [...new Array(4)].map((_, index) => (
                        <Sceleton key={index} />
                    ))}
            </div>
        </>
    );
};

export default Home;
