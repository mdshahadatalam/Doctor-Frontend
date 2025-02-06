import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import { SignIn } from "../Pages/SignIn";

export default function LoggedInUser(){
    const user = useSelector((user)=> user.login.logged);
    return user ? <Outlet/> : <SignIn/>
}