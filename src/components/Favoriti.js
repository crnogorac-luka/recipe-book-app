import React from 'react';
import Recept from "./Recept";

const Favoriti = ({ recepti, definirajRecepte, favoriti, definirajFavorite }) => {

    return (
        <div>
            <ul className="p-0">
                {/* nakon svake promijene stanja, lista se ponovno prolazi i 
                podaci se mapiraju za svaku Recept komponentu */}
                {favoriti.map((recept, index) => (
                    <Recept
                        naslov={recept.naslov}
                        vrijemePripreme={recept.vrijemePripreme}
                        sastojci={recept.sastojci}
                        upute={recept.upute}
                        favorit={recept.favorit}
                        id={recept.id}
                        recept={recept}
                        recepti={recepti}
                        definirajRecepte={definirajRecepte}
                        favoriti={favoriti}
                        definirajFavorite={definirajFavorite}
                    />))}
            </ul>
        </div>
    )
}

export default Favoriti;
