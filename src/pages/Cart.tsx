import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RiShoppingCartLine, RiDeleteBinLine } from 'react-icons/ri';
import { TiArrowBackOutline } from 'react-icons/ti';
import { clearItems } from '../store/cartSlice';
import { RootState } from '../store/store';
import CartItem from '../components/CartItem';
import CartEmpty from '../components/CartEmpty';

const Cart: FC = () => {
    const dispatch = useDispatch();
    const { totalPrice, items } = useSelector((state: RootState) => state.cart);

    const clearItemsHandler = () => {
        dispatch(clearItems());
    };

    if (items.length === 0) {
        return <CartEmpty />
    }

    return (
        <div className='cart'>
            <div className='cart__top'>
                <h2 className='cart__title'>
                    <RiShoppingCartLine size={30} />
                    Shopping Cart
                </h2>
                <div onClick={clearItemsHandler} className='cart__clear'>
                    <RiDeleteBinLine size={25} />
                    <span>Empty the shopping cart</span>
                </div>
            </div>
            <div className='content__items'>
                {items.map((item) => (
                    <CartItem key={item.id} {...item} />
                ))}
            </div>
            <div className='cart__bottom'>
                <div className='cart__bottom-details'>
                    <span>
                        Total games: <b>{items.length} pieces</b>
                    </span>
                    <span>
                        Order amount: <b>${totalPrice.toFixed(2)}</b>
                    </span>
                </div>
                <div className='cart__bottom-buttons'>
                    <Link
                        to='/'
                        className='button button--outline button--add go-back-btn'>
                        <TiArrowBackOutline size={20} />
                        <span>Go Back</span>
                    </Link>
                    <div className='button pay-btn'>
                        <span>Pay Now</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
