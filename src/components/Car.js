import React from 'react';
import ReactDOM from "react-dom";
import cars from '../cars.json';
import Home from "./Home";
import { Link } from "react-dom";
import CarPost from "./CarPost";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
} from "react-router-dom";

// import material ui components here //
// Container, Paper, Chip //

const Car = (props) => {
    let { slug } = useParams();
    return (
        <div>
            Show more details {slug}
        <Router>
            <Link>
                <Route exact path="/">
                <Home />
                </Route>
                <Route path="/blog/:slug">
                    <CarPost/>
                </Route>
            </Link>
        </Router>
        </div>
    )
}

export default Car