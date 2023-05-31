import { useEffect, useState, useMemo, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { chooseCategory } from '../store/filterSlice';
import { SearchContext } from '../components/RootLayout';
import Categories from '../components/Categories';
import Pagination from '../components/Pagination';
import Sceleton from '../components/Sceleton';
import Sort from '../components/Sort';
import Card from '../components/Card';

const Home = () => {
    const { searchValue } = useContext(SearchContext);
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);

    const { category, sort } = useSelector((state) => state.filter);
    const dispatch = useDispatch();
    const categoryHandler = (name) => {
        dispatch(chooseCategory(name));
    };

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

    useEffect(() => {
        if (category !== 'All') {
            setCurrentPage(0);
        }
    }, [category]);

    const filteredItems = useMemo(() => {
        const sortFunctions = {
            Popularity: (a, b) => b.rating - a.rating,
            'Price (low to high)': (a, b) => a.price - b.price,
            'Price (high to low)': (a, b) => b.price - a.price,
            'Title (A-Z)': (a, b) => a.title.localeCompare(b.title),
            'Title (Z-A)': (a, b) => b.title.localeCompare(a.title),
        };
        return (
            category === 'All'
                ? items
                : items.filter((game) => game.category === category)
        ).sort(sortFunctions[sort] || ((a, b) => 0));
    }, [items, category, sort]);

    const searchGames = filteredItems.filter((game) =>
        game.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    const games = searchGames.map((game) => <Card key={game.id} {...game} />);

    const gamesOnPage = games.slice(currentPage * 4, (currentPage + 1) * 4);

    const dummyItems = [...new Array(4)].map((_, index) => (
        <Sceleton key={index} />
    ));

    let maxPage;
    if (searchGames.length > 4) {
        maxPage = Math.ceil(searchGames.length / 4);
        if (currentPage >= maxPage) {
            setCurrentPage(0);
        }
    } else {
        maxPage = 1;
        if (currentPage !== 0) {
            setCurrentPage(0);
        }
    }

    return (
        <>
            <div className='content__top'>
                <Categories
                    value={category}
                    categoryHandler={(name) => categoryHandler(name)}
                />
                <Sort />
            </div>
            <h2 className='content__title'>Nintendo Switch games</h2>
            <div className='content__items'>
                {loading ? dummyItems : gamesOnPage}
            </div>
            <Pagination
                pageHandler={(number) => setCurrentPage(number)}
                currentPage={currentPage}
                maxPage={maxPage}
            />
        </>
    );
};

export default Home;
