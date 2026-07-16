import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { Children } from "react"

const LoginProtectedRoute = ({children}) => {
    const  {user}=useAuth()
    // console.log('user in LoginProtectedRoute',user)

  return user?<Navigate to="/dashboard" replace/>:children
}

export default LoginProtectedRoute

// user hai to => dashboard hona chahiye