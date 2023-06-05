import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SiNintendoswitch } from 'react-icons/si';
import { RiShoppingCartFill } from 'react-icons/ri';
import Search from './Search';

const Header = () => {
    const { totalPrice, items } = useSelector((state) => state.cart);

    return (
        <header className='header'>
            <div className='container'>
                <Link to='/' className='header__logo'>
                    <SiNintendoswitch size={40} />
                    <div>
                        <h1>Gaming Galaxy</h1>
                        <p>The Best Gaming Store in the World</p>
                    </div>
                </Link>
                <Search />
                <div className='header__cart'>
                    <Link to='/cart' className='button button--cart'>
                        <span>${totalPrice.toFixed(2)}</span>
                        <div className='button__delimiter'></div>
                        <RiShoppingCartFill size={25} />
                        <span>{items.length}</span>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
