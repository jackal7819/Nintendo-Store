import { GiSkullCrossedBones } from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import { removeItem } from '../store/cartSlice';

const CartItem = ({ id, url, title, price, kind, type }) => {
    const dispatch = useDispatch();
    const removeItemHandler = () => {
        dispatch(removeItem(id));
    };

    return (
        <div className='cart__item'>
            <div className='cart__item-img'>
                <img className='cart__image' src={url} alt='Nintendo Game' />
            </div>
            <div className='cart__item-info'>
                <h3>{title}</h3>
                <p>
                    {type}, {kind}
                </p>
            </div>
            <div className='cart__item-price'>
                <b>${price.toFixed(2)}</b>
                <GiSkullCrossedBones onClick={removeItemHandler} size={25} />
            </div>
        </div>
    );
};

export default CartItem;
