import React from "react";
import Recepti from "./Recepti";
import Favoriti from "./Favoriti";
import { Link } from "react-router-dom";

// komponenta koja sadrzi listu recepata i onih koji su oznaceni kao favoriti
const Home = ({ recepti, definirajRecepte, favoriti, definirajFavorite }) => {

    return (
        <div id="home" className="mx-3 mt-4">
            <h2>Favoriti</h2>
            <Favoriti recepti={recepti} definirajRecepte={definirajRecepte} favoriti={favoriti} definirajFavorite={definirajFavorite} />
            <div className="d-flex">
                <h2>Svi recepti</h2>
                <Link to="/noviRecept">
                    <button className="btn btn-primary">Dodaj novi</button>
                </Link>
            </div>
            <Recepti recepti={recepti} definirajRecepte={definirajRecepte} favoriti={favoriti} definirajFavorite={definirajFavorite} />

        </div>

    );
}

export default Home;