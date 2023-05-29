import { RiSearch2Line } from 'react-icons/ri';
import { TbArrowsCross } from 'react-icons/tb';
import styles from './Search.module.scss';

const Search = ({ searchValue, setSearchValue }) => {
    return (
        <div className={styles.searching}>
            <RiSearch2Line size={20} />
            <input
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                className={styles.input}
                placeholder='Game Search...'
                name='search'
                id='search'
            />
            {searchValue && (
                <TbArrowsCross
                    onClick={() => setSearchValue('')}
                    className={styles.close}
                    size={20}
                />
            )}
        </div>
    );
};

export default Search;
