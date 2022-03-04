import { Navigate, useLocation } from "react-router-dom"
import { useContext } from "react/cjs/react.development"
import { AuthContext } from "../../auth/authContext"


export const PrivateRoute = ({ children }) => {
    
    const { user } = useContext( AuthContext )
    const location = useLocation()
    const lastPath = location.pathname + location.search
    
    localStorage.setItem( "lastPath", lastPath )

    return ( user.logged )
                ? children
                : <Navigate to="/login"/>
}
