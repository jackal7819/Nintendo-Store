import { useState } from 'react';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

const Sort = () => {
    const list = ['Popularity', 'Price', 'Title'];
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(0);

    const openHandler = () => {
        setOpen(!open);
    };

    const selectedItemHandler = (index) => {
        setSelected(index);
        setOpen(false);
    };

    return (
        <div className='sort'>
            <div className='sort__label'>
                {open && <MdKeyboardArrowUp size={25} />}
                {!open && <MdKeyboardArrowDown size={25} />}
                <b>Sort by:</b>
                <span onClick={openHandler}>{list[selected]}</span>
            </div>
            {open && (
                <div className='sort__popup'>
                    <ul>
                        {list.map((item, index) => (
                            <li
                                key={item}
                                onClick={() => selectedItemHandler(index)}
                                className={selected === index ? 'active' : ''}>
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
