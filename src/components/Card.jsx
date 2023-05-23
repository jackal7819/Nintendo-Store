import { useState } from 'react';
import { CgMathPlus } from 'react-icons/cg';

const Card = (props) => {
    const { url, title, price, types, kindes } = props;
    const [activeKind, setActiveKind] = useState(kindes[0]);
    const [activeType, setActiveType] = useState(types[0]);

    const chooseKindHandler = (kind) => {
        setActiveKind(kind);
    };

    const chooseTypeHandler = (type) => {
        setActiveType(type);
    };

    return (
        <div className='card'>
            <img className='card__image' src={url} alt='Nintendo Game' />
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
                <div className='card__price'>${price}</div>
                <button className='button button--outline button--add'>
                    <CgMathPlus size={20} />
                    <span>Add</span>
                    <i>0</i>
                </button>
            </div>
        </div>
    );
};

export default Card;
