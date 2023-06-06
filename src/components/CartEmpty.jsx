import { RiShoppingCartFill } from 'react-icons/ri';
import { TiArrowBackOutline } from 'react-icons/ti';
import { TbMoodSad } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const CartEmpty = () => {
    return (
        <div className='cart cart--empty'>
            <h2>
                The cart is empty <TbMoodSad size={45} />
            </h2>
            <p>
                You probably haven't ordered any games yet. To order games, go
                to the home page.
            </p>
            <RiShoppingCartFill size={50} />
            <Link
                to='/'
                className='button button--outline button--add go-back-btn'>
                <TiArrowBackOutline size={20} />
                <span>Go Back</span>
            </Link>
        </div>
    );
};

export default CartEmpty;
