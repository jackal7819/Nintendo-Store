import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { CgMathPlus } from 'react-icons/cg';
import { addItem } from '../store/cartSlice';

type CardProps = {
    id: string;
    url: string;
    title: string;
    price: number;
    types: string[];
    kindes: string[];
};

const Card: FC<CardProps> = ({ id, url, title, price, types, kindes }) => {
    const dispatch = useDispatch();
    const [activeKind, setActiveKind] = useState(kindes[0]);
    const [activeType, setActiveType] = useState(types[0]);

    const chooseKindHandler = (kind: string) => {
        setActiveKind(kind);
    };

    const chooseTypeHandler = (type: string) => {
        setActiveType(type);
    };

    const itemAddHandler = () => {
        const item = {
            id,
            url,
            title,
            price,
            kind: activeKind,
            type: activeType,
        };
        dispatch(addItem(item));
    };

    price += activeType === 'Physical' ? 10 : 0;
    price += activeKind === 'Gold' ? 10 : 0;
    price += activeKind === 'Deluxe' ? 20 : 0;

    return (
        <div className='card'>
            <Link to={`/card/${id}`}>
                <img className='card__image' src={url} alt='Nintendo Game' />
            </Link>
            <h3 className='card__title'>{title}</h3>
            <div className='card__selector'>
                <ul>
                    {types.map((type) => (
                        <li
                            key={type}
                            onClick={() => chooseTypeHandler(type)}
                            className={type === activeType ? 'active' : ''}>
                            {type}
                        </li>
                    ))}
                </ul>
                <ul>
                    {kindes.map((kind) => (
                        <li
                            key={kind}
                            onClick={() => chooseKindHandler(kind)}
                            className={kind === activeKind ? 'active' : ''}>
                            {kind}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='card__bottom'>
                <div className='card__price'>${price.toFixed(2)}</div>
                <button
                    onClick={itemAddHandler}
                    className='button button--outline button--add'>
                    <CgMathPlus size={20} />
                    <span>Add</span>
                </button>
            </div>
        </div>
    );
};

export default Card;
