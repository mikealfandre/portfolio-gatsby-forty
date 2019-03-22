import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = (props) => (
    <header id="header" className="alt">
        <Link to="/" className="logo"><strong>MIKE</strong> <span>ALFANDRE</span></Link>
        <nav>
            <a href="#one" >SKILLS</a>
            <a href="#two" >PROJECTS</a>
            <a href="#footer" >CONTACT</a>
            {/* <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a> */}
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
