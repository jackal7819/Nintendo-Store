import { FC } from 'react';

const  genres: string[] = [
    'All',
    'Action',
    'Arcade',
    'Fighting',
    'Platformer',
    'Racing',
    'RPG',
    'Strategy',
];

type CategoriesProps = {
    value: string;
    categoryHandler: (category: string) => void;
}

const Categories: FC<CategoriesProps> = ({ value, categoryHandler }) => {
    return (
        <div className='categories'>
            <ul>
                {genres.map((category) => (
                    <li
                        key={category}
                        onClick={() => categoryHandler(category)}
                        className={category === value ? 'active' : ''}>
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;