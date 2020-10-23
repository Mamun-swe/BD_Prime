import React from 'react'
import '../../../styles/user/chat/style.scss'
import { NavLink } from 'react-router-dom'
import Navbar from '../../../components/UserNavbar/Index'

const Messages = () => {
    return (
        <div className="messages">
            <Navbar title={'Messages'} back={true} />

            <div className="d-flex links-tab border-bottom">
                <div className="flex-fill text-center">
                    <NavLink exact activeClassName="is-Active" to="/home/chat/">Messages</NavLink>
                </div>
                <div className="flex-fill text-center">
                    <NavLink exact activeClassName="is-Active" to="/home/chat/peoples">Peoples</NavLink>
                </div>
            </div>

            <h1>Messages</h1>
        </div>
    );
};

export default Messages;