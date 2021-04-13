import React, { useState } from 'react';
import Recept from "./Recept";

export default function Favoriti({ recepti, definirajRecepte/*, favoriti, definirajFavorite*/ }) {


    return (
        <div>
            <ul className="p-0">
                {recepti.map((recept) => {
                    (recept.favorit ?
                    (<Recept
                        naslov={recept.naslov}
                        vrijemePripreme={recept.vrijemePripreme}
                        sastojci={recept.sastojci}
                        upute={recept.upute}
                        favorit={recept.favorit}
                        key={recept.id}
                        recept={recept}
                        recepti={recepti}
                        definirajRecepte={definirajRecepte}

                    />) : (<h1>Wrong</h1>))})}
            </ul>
        </div>
    )
}
