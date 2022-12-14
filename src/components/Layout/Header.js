import React from 'react'
import meals from '../../assets/meals.avif'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
    return (
        <div>
            <header className={classes.header}>
                <h1>MyFood</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={meals} alt="meals" />
            </div>
        </div>
    )
}

export default Header