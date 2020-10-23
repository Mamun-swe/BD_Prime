import React from 'react'
import '../../../styles/user/chat/style.scss'
import { NavLink } from 'react-router-dom'
import Navbar from '../../../components/UserNavbar/Index'

const Peoples = () => {
    return (
        <div className="peoples">
            <Navbar title={'Peoples'} back={true} />

            <div className="d-flex links-tab border-bottom">
                <div className="flex-fill text-center">
                    <NavLink exact activeClassName="is-Active" to="/home/chat/">Messages</NavLink>
                </div>
                <div className="flex-fill text-center">
                    <NavLink exact activeClassName="is-Active" to="/home/chat/peoples">Peoples</NavLink>
                </div>
            </div>

            <h1>Peoples</h1>
        </div>
    );
};

export default Peoples;