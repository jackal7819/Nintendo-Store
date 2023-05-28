const genres = [
    { id: 'm0', name: 'All' },
    { id: 'm1', name: 'Action' },
    { id: 'm2', name: 'Arcade' },
    { id: 'm3', name: 'Fighting' },
    { id: 'm4', name: 'Platformer' },
    { id: 'm5', name: 'Racing' },
    { id: 'm6', name: 'RPG' },
    { id: 'm7', name: 'Strategy' },
];

const Categories = ({ value, categoryHandler }) => {

    return (
        <div className='categories'>
            <ul>
                {genres.map((genre) => (
                    <li
                        key={genre.id}
                        onClick={() => categoryHandler(genre.name)}
                        className={genre.name === value ? 'active' : ''}>
                        {genre.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
