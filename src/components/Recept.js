import React from "react";
import { Link } from "react-router-dom";

const Recept = ({ naslov, id, vrijemePripreme, recept, recepti, definirajRecepte, favoriti, definirajFavorite }) => {

    //metoda koja omogućava dodavanje/uklanjanje recepta kao favorita
    const favoritHandler = (e) => {

        let tempRecepti = [...recepti];
        let currRecept = { ...recept };
        currRecept.favorit = !currRecept.favorit;
        let tempIndex = tempRecepti.findIndex(element => element.id == id);
        tempRecepti[tempIndex] = currRecept;

        definirajRecepte(tempRecepti);

        const noviFavoriti = [...tempRecepti];
        
        definirajFavorite(noviFavoriti.filter(element => element.favorit === true));

    };

    //metoda koja omogućava brisanje recepta
    const deleteHandler = () => {
        definirajRecepte(recepti.filter((element) => element.id != id));
        definirajFavorite(favoriti.filter((element) => element.id != id));
    };



    return (

        <div className="recept-item my-4 p-4" id={id}>
            <Link to={`/recept/${recept.id}`} >
                <div>
                    <h3>{naslov}</h3>
                    <p>{vrijemePripreme}</p>
                </div>
            </Link>
            <div>
                <img onClick={deleteHandler} src="media/delete.png" />
                <img onClick={favoritHandler} src={recept.favorit ? `media/icon_star_full.png` : `media/icon_star_empty.png`} />
            </div>
        </div>
    );

}

export default Recept;