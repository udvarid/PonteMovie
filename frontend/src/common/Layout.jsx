import React from 'react';
import {Route, Switch} from 'react-router-dom';
import NavBar from "./NavBar";
import PopularList from "../containers/Lists/PopularList/PopularList";
import PlayingList from "../containers/Lists/PlayingList/PlayingList";
import TopRatedList from "../containers/Lists/TopRatedList/TopRatedList";
import UpcomingList from "../containers/Lists/UpcomingList/UpcomingList";
import MovieDetailed from "../components/MovieDetailed/MovieDetailed";


function Layout() {
    return (
        <div className="layout__container">
            <NavBar/>
            <div>
                <Switch>
                    <Route path="/" exact component={PopularList}/>
                    <Route path="/PopularList" exact component={PopularList}/>
                    <Route path="/PlayingList" exact component={PlayingList}/>
                    <Route path="/TopRatedList" exact component={TopRatedList}/>
                    <Route path="/UpcomingList" exact component={UpcomingList}/>
                    <Route path="/Movie/:id" exact component={MovieDetailed}/>
                </Switch>
            </div>
        </div>
    )
}


export default Layout;