import { Link } from 'react-router-dom';
import { SiNintendoswitch } from 'react-icons/si';
import { RiShoppingCartFill } from 'react-icons/ri';

const Header = () => {
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
                <div className='header__cart'>
                    <Link to='/cart' className='button button--cart'>
                        <span>$152.99</span>
                        <div className='button__delimiter'></div>
                        <RiShoppingCartFill size={25} />
                        <span>3</span>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
