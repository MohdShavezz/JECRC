import React from 'react'
import './navbar.css'
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useAuth()
    return (
        <div>
            <nav>
                <div className='left'>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'link highlight' : 'link'
                    } to="/">Home</NavLink>

                    {
                        user &&
                        <NavLink className={({ isActive }) =>
                            isActive ? 'link highlight' : 'link'
                        } to="/dashboard">Dashboard</NavLink>
                    }

                </div>
                <div className='right'>
                    {
                        user ? <button onClick={logout} >logout</button> :
                            <NavLink className={({ isActive }) =>
                                isActive ? 'link highlight' : 'link'
                            } to="/login">Login</NavLink>
                    }
                </div>
            </nav>
        </div>
    )
}

export default Navbar
