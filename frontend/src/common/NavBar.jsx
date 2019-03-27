import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {

    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-primary">
            <div className="container">
                <div id="myNavbar" className="navbar-collapse collapse">
                    <ul className="navbar-nav mt-2 mt-lg-0">
                        <li className="nav-item"><Link className="nav-link" to="/PopularList" >Popular Movies</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/PlayingList">Now Playing Movies</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/TopRatedList">Top Rated Movies</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/UpcomingList">Upcoming Movies</Link></li>
                    </ul>
                </div>
            </div>

        </nav>
    )

}

export default NavBar;
