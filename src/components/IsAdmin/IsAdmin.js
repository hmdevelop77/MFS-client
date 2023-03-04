

import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { Navigate } from "react-router-dom";
import Loading from "../Loading/Loading";

function IsAdmin({ children }) {

  const { isLoggedIn, user, isAdmin,isLoading } = useContext(AuthContext);
  // If the authentication is still loading ⏳
  if (isLoading) {
    return <Loading />;
  }
  console.log("test for admin",isAdmin)
  if (!isLoggedIn) {
    // If the user is not logged in navigate to the login page ❌
    return <Navigate to="/login" />;
  }

  if (!user.admin) {
    // If the user is not logged in navigate to the login page ❌
    return //"Your are not admin"
  }

  // If the user is logged in, allow to see the page ✅
  return children;
}

export default IsAdmin;