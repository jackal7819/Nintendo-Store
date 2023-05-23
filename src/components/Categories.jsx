import { useState } from 'react';
import { genres } from '../data/data';

const Categories = () => {
    const [activeCategory, setActiveCategory] = useState('m0');

    const chooseCategoryHandler = (id) => {
        setActiveCategory(id);
    };

    return (
        <div className='categories'>
            <ul>
                {genres.map((genre) => (
                    <li
                        key={genre.id}
                        onClick={() => chooseCategoryHandler(genre.id)}
                        className={genre.id === activeCategory ? 'active' : ''}>
                        {genre.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
