import { MdKeyboardArrowUp } from 'react-icons/md';

const Sort = () => {
    return (
        <div className='sort'>
            <div className='sort__label'>
                <MdKeyboardArrowUp size={25} />
                <b>Sort by:</b>
                <span>Popularity</span>
            </div>
            <div className='sort__popup'>
                <ul>
                    <li className='active'>Popularity</li>
                    <li>Price</li>
                    <li>Title</li>
                </ul>
            </div>
        </div>
    );
};

export default Sort;
