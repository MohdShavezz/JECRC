import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { Children } from "react"

const DashboardProtectedRoute = ({children}) => {
    const  {user}=useAuth()
    // console.log('user in DashboardProtectedRoute',user)

  return user?children:<Navigate to="/login"/>
}

export default DashboardProtectedRoute

// localStorage:user (admin login hai) => /login nahi hona chahie
