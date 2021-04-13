import React from "react";
import { Link } from "react-router-dom";

const Recept = ({ naslov, key, id, vrijemePripreme, recept, recepti, definirajRecepte/*, favoriti, definirajFavorite*/ }) => {

    /*
    const deleteHandler = () => {
        setTodos(todos.filter((element) => element.id !== todo.id));
    };*/

    const favoritHandler = () => {
        definirajRecepte([
            recepti[recept] = {
                ...recept,
                favorit: !recept.favorit
            }
        ]);
    };

    const deleteHandler = () => {
        definirajRecepte(recepti.filter((element) => element.id !== id));
    };





    return (
        <Link to={{
            pathname:`/recept/${recept.id}`,
            state: recept, 
            key: key,
            //recepti: recepti,
            //definirajRecepte: definirajRecepte
            }}>
            <div className="recept-item my-4 p-4" id={id}>
                <div>
                    <h3>{naslov}</h3>
                    <h5>{vrijemePripreme}</h5>
                </div>
                <div>
                    <img onClick={deleteHandler} src="media/delete.png" />
                    <img onClick={favoritHandler} src={recept.favorit ? `media/icon_star_full.png` : `media/icon_star_empty.png`} />
                </div>
            </div>
        </Link>
    );

}

export default Recept;