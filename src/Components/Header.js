import { NavLink } from "react-router-dom";

function Header (){

    return (

        <>
        
    <nav className="navbar navbar-expand-lg">
    <NavLink  to="/" className="navbar-brand">Home</NavLink>
    <NavLink  to="/About" className="navbar-brand">About</NavLink>
    <NavLink  to="/Project"className="navbar-brand">Portfolio</NavLink>
    <NavLink  to="/Contact"className="navbar-brand">Contact</NavLink>
    </nav>
    
        </>


    )


}


export default Header;