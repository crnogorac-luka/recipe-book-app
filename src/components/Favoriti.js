import React, { useState } from 'react';
import Recept from "./Recept";

export default function Favoriti({ recepti, definirajRecepte/*, favoriti, definirajFavorite*/ }) {

    const [favoriti, definirajFavorite] = useState([]);
    
    
    const osvjeziFavorite = () => {
        let noviFavoriti = [];
        for (let recept in recepti) {
            if (recept.favorit === true) {
                
            }
        }
    }
    
    
        

    return (
        <div>
            <ul className="p-0">
                {favoriti.map((recept, index) => (
                    <Recept
                        naslov={recept.naslov}
                        vrijemePripreme={recept.vrijemePripreme}
                        sastojci={recept.sastojci}
                        upute={recept.upute}
                        favorit={recept.favorit}
                        id={recept.id}
                        key={index}
                        recept={recept}
                        recepti={recepti}
                        definirajRecepte={definirajRecepte}
                    //favoriti={favoriti}
                    //definirajFavorite={definirajFavorite}
                    />))}
            </ul>
        </div>
    )
}
