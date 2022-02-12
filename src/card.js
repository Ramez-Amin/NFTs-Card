import React, { useState } from 'react';
import image from './image.jpg';
import i from './icon-view.svg';
import et from './icon-ethereum.svg';
import clock from './icon-clock.svg';
import avatar from './ramiz.jpg';

function Card() {
    const [isActive, setActive] = useState(false);
    const overlay = document.getElementsByClassName('overlay');
    const change = () => {
        isActive ? setActive(false) : setActive(true);
    }
    
    return (
        <>
        <div className="card-container">
            <div className='pic-container'>
                <div className={isActive ? 'overlay active' : 'overlay'} onMouseOver={change} onMouseOut={change}><img className={isActive ? 'svg sa' : 'svg'} src={i} alt="" /></div>
                <img src={image} alt="equilibrium" />
            </div>
            <div className='info-container'>
                <h4 className='title'>Equilibrium #3429</h4>
                <p className='info'>Our Equilibrium collection promotes balance and calm</p>
                <div className='price-container'>
                    <p className='price'><img src={et} className="et" /> 0.041ETH</p>
                    <p className="time"> <img src={clock} alt="clock" className='clock' /> 3 days left</p>
                </div><br />
                <hr className='line' /><br />
                <div className='footer'>
                    <img className='avatar' src={avatar} alt="avatar" />
                    <p className='creation'>Creation of <span className='name'>Ramez Amin</span></p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Card;