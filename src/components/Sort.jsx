import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { chooseSort } from '../store/filterSlice';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

const list = [
    'Popularity',
    'Price (high to low)',
    'Price (low to high)',
    'Title (A-Z)',
    'Title (Z-A)',
];

const Sort = () => {
    const [open, setOpen] = useState(false);
    const sort = useSelector((state) => state.filter.sort);
    const dispatch = useDispatch();

    const openHandler = () => {
        setOpen(!open);
    };

    const selectedItemHandler = (name) => {
        dispatch(chooseSort(name));
        setOpen(false);
    };

    return (
        <div className='sort'>
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
};

export default Sort;
