import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav__container">
        <ul className={"nav__list"}>
            <li className="nav__item">
                <Link className={"nav__link"} to={"/"}>Main</Link>
            </li>
            <li className="nav__item">
                <Link className={"nav__link"} to={"/square"}>Square</Link>
            </li>
        </ul>
        </div>
    );
};

export default Nav;