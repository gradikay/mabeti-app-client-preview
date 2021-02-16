// This file is exported to --->  src/App.js
// React required
import React from "react";
import { Link } from "react-router-dom";
// Getting - user status (user login - true or false) - from useAppContext
import { useAppContext } from "../libs/contextLib";
// CSS
import "../css/Navigation.css"
// -------------- Application Begins Bellow ------------ //

// Main function
export default function Navigation() {

    // Important variables
    const { isAuthenticated, userHasAuthenticated } = useAppContext();

    // Handling Logout
    async function handleLogout() {

        // Setting userHasAuthenticated to false in useAppContext
        userHasAuthenticated(false);

        // Redirect to Login
        window.location.href = '/login';

    }


    // Return UI
    return ( 
        <>


            {/* Navigation - Start */}
            <nav id="Navigation" className="navbar navbar-expand-md bg-red navbar-dark">

                {/* Brand - Start */}
                <Link className="navbar-brand p-0" to="/">Mabeti</Link>
                {/* Brand - Ebd */}

                { /* Toggler/collapsibe Button - Start */}
                <button className="navbar-toggler mr-5" type="button" data-toggle="collapse" data-target="#collapsibleNavbar1">
                    <i className='fa fa-server' role="img" aria-label="menu"></i>
                </button>
                { /* Toggler/collapsibe Button - End */}

                {/* Navbar links - Start */}
                    
                { /* Other Links - Start */}
                <AppliedLinks/>
                <AuthenticatedLinks handleLogout={handleLogout} />
                <UnauthenticatedLinks/> 
                { /* Other Links - End */}

            </nav> 
            {/* Navigation - End */}

            {/* Banner - Start */}
            <section className="p-2 text-center bg-dark text-white" >
                <span>Last Day: 25% Off With Any Fierce Purchase | Last Day: my membership Get Free Shipping <small>See Details</small></span>
            </section>
            {/* Banner - End */}

        </> 
 
        );
}

// Links for both public and logged in users
function AppliedLinks() {
    return (
        <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar1">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/filter/men">MEN'S</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/filter/women">WOMEN'S</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/filter/kids">KIDS</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/filter/jeans">JEANS</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/filter/fierce">FIERCE</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/filter/sale">SALE</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link disabled" to="#">ABOUT US</Link>
                </li>
            </ul>
        </div>
        );
}

// Links for logged in users
function AuthenticatedLinks({ handleLogout }) {
    return (
        <> 

            { /* Compte - Start */}
            <ul className="navbar-nav">

                <li className="nav-item">
                    <Link className="nav-link" to="/postnew">
                        + Add Item
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">
                        <i className="fa fa-ban fa-spin"></i> Dashboard
                    </Link>
                </li>  

            </ul>
            { /* Compte - End */}

            { /* Logout - Start */}
            <div className="nav-item dropdown" style={{ cursor: "pointer" }}>
                <span
                    className="nav-link"
                    onClick={handleLogout}
                > Logout</span>
            </div>
            { /* Logout - End */}
        </>
        );
}

// Links for public users
function UnauthenticatedLinks() {
    return (
        <ul className="navbar-nav">
            { /* Register - Start */}
            <li className="nav-item">
                <Link className="nav-link" to="/register">
                    Register
                </Link>
            </li>
            { /* Register - End */}

            { /* Sign In - Start */}
            <li className="nav-item">
                <Link className="nav-link" to="/login">
                    Login
                </Link>
            </li>
            { /* Sign In - End */}

        </ul>
        );
}