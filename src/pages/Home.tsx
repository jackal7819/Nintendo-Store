import { FC, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TbMoodSad } from 'react-icons/tb';
import { ListItem, fetchGames } from '../store/gameSlice';
import { chooseCategory, chooseCurrentPage } from '../store/filterSlice';
import { AppDispatch, RootState } from '../store/store';
import Categories from '../components/Categories';
import Pagination from '../components/Pagination';
import Sceleton from '../components/Sceleton';
import Sort from '../components/Sort';
import Card from '../components/Card';

const Home: FC = () => {
    const dispatch: AppDispatch = useDispatch();

    const { searchValue, category, sort, currentPage } = useSelector(
        (state: RootState) => state.filter
    );
    const { gameList, status } = useSelector((state: RootState) => state.games);

    const categoryHandler = (name: string) => {
        dispatch(chooseCategory(name));
    };

    useEffect(() => {
        dispatch(fetchGames());
        window.scrollTo(0, 0);
    }, [dispatch]);

    useEffect(() => {
        if (category !== 'All') {
            dispatch(chooseCurrentPage(0));
        }
    }, [category, dispatch]);

    const filteredItems: ListItem[] = useMemo(() => {
        const sortFunctions: Record<
            string,
            (a: ListItem, b: ListItem) => number
        > = {
            Popularity: (a: ListItem, b: ListItem) => b.rating - a.rating,
            'Price (low to high)': (a: ListItem, b: ListItem) =>
                a.price - b.price,
            'Price (high to low)': (a: ListItem, b: ListItem) =>
                b.price - a.price,
            'Title (A-Z)': (a: ListItem, b: ListItem) =>
                a.title.localeCompare(b.title),
            'Title (Z-A)': (a: ListItem, b: ListItem) =>
                b.title.localeCompare(a.title),
        };
        const filteredList =
            category === 'All'
                ? gameList
                : gameList.filter((game) => game.category === category);

        return filteredList.slice().sort(sortFunctions[sort] || ((a, b) => 0));
    }, [gameList, category, sort]);

    const searchGames = filteredItems.filter((game) =>
        game.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    const gamesAll = searchGames.map((game) => (
        <Card key={game.id} {...game} />
    ));

    const gamesOnPage = gamesAll.slice(currentPage * 4, (currentPage + 1) * 4);

    const dummyItems = [...new Array(4)].map((_, index) => (
        <Sceleton key={index} />
    ));

    let maxPage;
    if (searchGames.length > 4) {
        maxPage = Math.ceil(searchGames.length / 4);
        if (currentPage >= maxPage) {
            chooseCurrentPage(0);
        }
    } else {
        maxPage = 1;
        if (currentPage !== 0) {
            chooseCurrentPage(0);
        }
    }

    return (
        <>
            {status === 'error' ? (
                <div className='error'>
                    <TbMoodSad size={70} className='error__sad' />
                    <h2 className='error__title'>There was an error</h2>
                    <p className='error__text'>
                        Unfortunately, the games could not be downloaded. Try
                        again later.
                    </p>
                </div>
            ) : (
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
                        {status === 'loading' ? dummyItems : gamesOnPage}
                    </div>
                    <Pagination maxPage={maxPage} />
                </>
            )}
        </>
    );
};

export default Home;
