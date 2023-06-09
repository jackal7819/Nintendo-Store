import { FC, useRef, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chooseSearchValue } from '../store/filterSlice';
import { RiSearch2Line } from 'react-icons/ri';
import { TbArrowsCross } from 'react-icons/tb';
import { RootState } from '../store/store';
import styles from './Search.module.scss';

const Search: FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();

    const { searchValue } = useSelector((state: RootState) => state.filter);

    const onClear = () => {
        dispatch(chooseSearchValue(''));
        inputRef.current?.focus();
    };

    return (
        <div className={styles.searching}>
            <RiSearch2Line size={20} />
            <input
                ref={inputRef}
                value={searchValue}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
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
