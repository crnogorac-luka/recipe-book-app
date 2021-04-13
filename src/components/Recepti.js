import React from "react";
import Recept from "./Recept";

const Recepti = ({ recepti, definirajRecepte/*, favoriti, definirajFavorite*/ }) => {


    return (
        
        <div>
            <ul className="p-0">
                {recepti.map((recept, index) => (
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
    );
}

export default Recepti;