import React, { useContext } from 'react'
import { AuthContext } from '../../auth/authContext'
import { types } from '../../types/types'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export const Navbar = () => {

    const navigate = useNavigate()

    const { user, dispatch } = useContext( AuthContext )

    const handleLogout = () => {

        const action = {
            type: types.logout
        }

        dispatch( action )

        navigate( "/login", {
            replace:true,
        } )
    }


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ (( navData ) => "nav-item nav-link " +  ( navData.isActive ? 'active' : '' ) ) }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ (( navData ) => "nav-item nav-link " +  ( navData.isActive ? 'active' : '' ) ) }
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={ (( navData ) => "nav-item nav-link " +  ( navData.isActive ? 'active' : '' ) ) }
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ms-auto">

                    <span className="nav-item nav-link text-info">
                        { user.name }
                    </span>

                    <button 
                        onClick={ handleLogout }
                        className="nav-item nav-link btn" 
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}