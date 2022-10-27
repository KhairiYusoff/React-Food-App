import React from 'react'
import meals from '../../assets/meals.avif'

const Header = () => {
    return (
        <div>
            <header>
                <h1>MyFood</h1>
                <button>Cart</button>
            </header>
            <div>
                <img src={meals} alt="" />
            </div>
        </div>
    )
}

export default Header