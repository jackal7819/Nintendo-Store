import { CgMathPlus } from 'react-icons/cg';

const Card = () => {
    return (
        <div className='card'>
            <img
                className='card__image'
                src='https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/software/switch/70010000063709/32b85837beea0eee31220a59e247219662de4011f7a8c18fce61cf99a4933eb7'
                alt='Pizza'
            />
            <h3 className='card__title'>Metroid Prime™ Remastered</h3>
            <div className='card__selector'>
                <ul>
                    <li className='active'>Digital</li>
                    <li>Physical</li>
                </ul>
                {/* <ul>
                    <li className='active'>Standart</li>
                    <li>Gold</li>
                    <li>Deluxe</li>
                </ul> */}
            </div>
            <div className='card__bottom'>
                <div className='card__price'>$59.99</div>
                <div className='button button--outline button--add'>
                    <CgMathPlus size={20} />
                    <span>Add</span>
                    <i>2</i>
                </div>
            </div>
        </div>
    );
};

export default Card;
