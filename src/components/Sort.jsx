import { useState } from 'react';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

const Sort = ({value, sortTypeHandler}) => {
    const list = ['Popularity', 'Price (high to low)', 'Price (low to high)', 'Title (A-Z)', 'Title (Z-A)'];
    const [open, setOpen] = useState(false);

    const openHandler = () => {
        setOpen(!open);
    };

    const selectedItemHandler = (name) => {
        sortTypeHandler(name);
        setOpen(false);
    };

    return (
        <div className='sort'>
            <div className='sort__label'>
                {open && <MdKeyboardArrowUp size={25} />}
                {!open && <MdKeyboardArrowDown size={25} />}
                <b>Sort by:</b>
                <span onClick={openHandler}>{value}</span>
            </div>
            {open && (
                <div className='sort__popup'>
                    <ul>
                        {list.map((item) => (
                            <li
                                key={item}
                                onClick={() => selectedItemHandler(item)}
                                className={value === item ? 'active' : ''}>
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
