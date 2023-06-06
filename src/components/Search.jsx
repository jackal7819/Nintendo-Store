import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chooseSearchValue } from '../store/filterSlice';
import { RiSearch2Line } from 'react-icons/ri';
import { TbArrowsCross } from 'react-icons/tb';
import styles from './Search.module.scss';

const Search = () => {
    const inputRef = useRef();
    const dispatch = useDispatch();

    const { searchValue } = useSelector((state) => state.filter);

    const onClear = () => {
        dispatch(chooseSearchValue(''));
        inputRef.current.focus();
    };

    return (
        <div className={styles.searching}>
            <RiSearch2Line size={20} />
            <input
                ref={inputRef}
                value={searchValue}
                onChange={(event) =>
                    dispatch(chooseSearchValue(event.target.value))
                }
                className={styles.input}
                placeholder='Game Search...'
                name='search'
                id='search'
            />
            {searchValue && (
                <TbArrowsCross
                    onClick={onClear}
                    className={styles.close}
                    size={20}
                />
            )}
        </div>
    );
};

export default Search;
