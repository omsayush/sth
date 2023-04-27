import React from 'react'
import { NavLink } from 'react-router-dom';
// import { useAuth0 } from "@auth0/auth0-react";

function Navbaar() {
    // const { logout, user, isAuthenticated } = useAuth0();
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/login">Shiv Tailoring</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                            
                        </form>

                        <button onClick={() => logout({ returnTo: 'http://localhost:3000/login' })} style={{margin: "10px"}}>
                            Log Out
                        </button> */}

                        {/* <div>
                            { isAuthenticated && <p>{user.name}</p>}
                        </div> */}
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbaar