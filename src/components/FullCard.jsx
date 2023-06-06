import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './FullCard.module.scss';

const FullCard = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const gameList = useSelector((state) => state.games.gameList);
    const game = gameList.find((game) => game.id === id);

    useEffect(() => {
        if (!game) {
            navigate('/');
        }
    }, [game, navigate]);

    if (!game) {
        return <div className={styles.nothing}>Game not found</div>;
    }

    return (
        <div className={styles.game}>
            <div>
                <img
                    className='game__image'
                    src={game.url}
                    alt='Nintendo Game'
                />
            </div>
            <div className={styles.description}>
                <h3>{game.title}</h3>
                <div>{game.description}</div>
                <div className={styles.item}>
                    <p>Release date</p>
                    {game.release}
                </div>
                <div className={styles.item}>
                    <p>Game file size</p>
                    {game.size}
                </div>
                <div className={styles.item}>
                    <p>Base price</p>${game.price.toFixed(2)}
                </div>
            </div>
        </div>
    );
};

export default FullCard;
