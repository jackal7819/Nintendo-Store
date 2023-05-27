import { Link } from 'react-router-dom';
import {
    RiShoppingCartLine,
    RiDeleteBinLine,
    RiArrowGoBackLine,
} from 'react-icons/ri';
import { RxPlus, RxMinus } from 'react-icons/rx';
import { GiSkullCrossedBones } from 'react-icons/gi';

const Cart = () => {
    return (
        <div className='cart'>
            <div className='cart__top'>
                <h2 className='cart__title'>
                    <RiShoppingCartLine size={30} />
                    Shopping Cart
                </h2>
                <div className='cart__clear'>
                    <RiDeleteBinLine size={25} />
                    <span>Empty the shopping cart</span>
                </div>
            </div>
            <div className='content__items'>
                <div className='cart__item'>
                    <div className='cart__item-img'>
                        <img
                            className='cart__image'
                            src='https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/software/switch/70010000063714/276a412988e07c4d55a2996c6d38abb408b464413b2dfeb44d2aa460b9f622e1'
                            alt='Nintendo Game'
                        />
                    </div>
                    <div className='cart__item-info'>
                        <h3>The Legend of Zelda™</h3>
                        <p>Digital, Deluxe</p>
                    </div>
                    <div className='cart__wrapper'>
                    <div className='cart__item-count'>
                            <RxMinus size={20} />
                            <b>2</b>
                            <RxPlus size={20} />
                        </div>
                        <div className='cart__item-price'>
                            <b>$129</b>
                            <GiSkullCrossedBones size={25} />
                        </div>
                    </div>
                </div>
                <div className='cart__item'>
                    <div className='cart__item-img'>
                        <img
                            className='cart__image'
                            src='https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/software/switch/70010000063714/276a412988e07c4d55a2996c6d38abb408b464413b2dfeb44d2aa460b9f622e1'
                            alt='Nintendo Game'
                        />
                    </div>
                    <div className='cart__item-info'>
                        <h3>The Legend of Zelda™</h3>
                        <p>Digital, Deluxe</p>
                    </div>
                    <div className='cart__wrapper'>
                    <div className='cart__item-count'>
                            <RxMinus size={20} />
                            <b>2</b>
                            <RxPlus size={20} />
                        </div>
                        <div className='cart__item-price'>
                            <b>$129</b>
                            <GiSkullCrossedBones size={25} />
                        </div>
                    </div>
                </div>
                <div className='cart__item'>
                    <div className='cart__item-img'>
                        <img
                            className='cart__image'
                            src='https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/software/switch/70010000063714/276a412988e07c4d55a2996c6d38abb408b464413b2dfeb44d2aa460b9f622e1'
                            alt='Nintendo Game'
                        />
                    </div>
                    <div className='cart__item-info'>
                        <h3>The Legend of Zelda™</h3>
                        <p>Digital, Deluxe</p>
                    </div>
                    <div className='cart__wrapper'>
                        <div className='cart__item-count'>
                            <RxMinus size={20} />
                            <b>2</b>
                            <RxPlus size={20} />
                        </div>
                        <div className='cart__item-price'>
                            <b>$129</b>
                            <GiSkullCrossedBones size={25} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='cart__bottom'>
                <div className='cart__bottom-details'>
                    <span>
                        Total games: <b>3 pieces</b>
                    </span>
                    <span>
                        Order amount: <b>$789</b>
                    </span>
                </div>
                <div className='cart__bottom-buttons'>
                    <Link
                        to='/'
                        className='button button--outline button--add go-back-btn'>
                        <RiArrowGoBackLine />
                        <span>Go back</span>
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
