const genres = [
    'All',
    'Action',
    'Arcade',
    'Fighting',
    'Platformer',
    'Racing',
    'RPG',
    'Strategy',
];

const Categories = ({ value, categoryHandler }) => {
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
