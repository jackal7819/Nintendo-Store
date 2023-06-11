import { FC, useState, useRef, useEffect, memo } from 'react';
import { useDispatch } from 'react-redux';
import { chooseSort } from '../store/filterSlice';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

const list: string[] = [
    'Popularity',
    'Price (high to low)',
    'Price (low to high)',
    'Title (A-Z)',
    'Title (Z-A)',
];

type SortProps = {
    sort: string;
};

const Sort: FC<SortProps> = memo(({ sort }) => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const sortRef = useRef<HTMLDivElement>(null);

    const openHandler = () => {
        setOpen(!open);
    };

    const selectedItemHandler = (name: string) => {
        dispatch(chooseSort(name));
        setOpen(false);
    };

    useEffect(() => {
        const handleClickOutside: EventListener = (event: Event) => {
            if (!sortRef.current?.contains(event.target as HTMLElement)) {
                setOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div ref={sortRef} className='sort'>
            <div className='sort__label'>
                {open && <MdKeyboardArrowUp size={25} />}
                {!open && <MdKeyboardArrowDown size={25} />}
                <b>Sort by:</b>
                <span onClick={openHandler}>{sort}</span>
            </div>
            {open && (
                <div className='sort__popup'>
                    <ul>
                        {list.map((item) => (
                            <li
                                key={item}
                                onClick={() => selectedItemHandler(item)}
                                className={sort === item ? 'active' : ''}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
});

export default Sort;
