import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {resetAll} from "../../redux/actions/taskActions";

const Header = () => {
    const user = useSelector(s => s.user)
    const dispatch = useDispatch()
    return (
        <header className="header">
            <nav className="navbar navbar-light bg-primary py-3">
                <div className="container">
                    <a className="navbar-brand">{user.name}'s money</a>
                    <button className="btn red-btn ms-auto d-block text-white" onClick={() => dispatch(resetAll())}>Сбросить все</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;