import React from 'react';
import { Link } from 'react-router-dom';

export default function ReceptInfo(props) {

    // id od recepta koji je otvoren
    const currID = props.match.params.id;

    let tempRecepti1 = [...props.recepti];
    //trenutni recept
    let currRecept = tempRecepti1.filter(element => element.id == currID)[0];

    // brisanje recepta
    const deleteHandler = () => {
        props.definirajRecepte(props.recepti.filter((element) => element.id != currID));
        props.definirajFavorite(props.favoriti.filter((element) => element.id != currID));
    }

    // uredjivanje podataka za trenutni recept
    const editHandler = (e) => {

        const text = prompt("Unesi novo:");

        //RECEPTI
        let tempRecepti = [...props.recepti];
        let tempRecept = currRecept;
        tempRecept = {
            ...tempRecept,
            [e.target.name]: text
        };
        let tempIndex = tempRecepti.findIndex(element => element.id == currID);
        tempRecepti[tempIndex] = tempRecept;
        //promjena je vidljiva i na trenutnoj stranici
        currRecept = tempRecept;
        props.definirajRecepte(tempRecepti);

        // FAVORITI
        if (currRecept.favorit) {
            let tempFavoriti = [...props.favoriti];
            let currFavorit = currRecept;

            let tempFavIndex = tempFavoriti.findIndex(element => element.id == currID);
            tempFavoriti[tempFavIndex] = currFavorit;

            props.definirajFavorite(tempFavoriti);
        }
    }

    return (
        <div id="receptInfo" className="mx-3 mt-4">
            <div>
                <div className="d-flex flex-row">
                    <h2>{currRecept.naslov}</h2>
                    <img onClick={editHandler} name="naslov" src="/media/edit.png" />
                </div>
            </div>
            <hr />
            <div>
                <div className="d-flex flex-row">
                    <h3>Vrijeme pripreme: <a>{currRecept.vrijemePripreme}</a></h3>
                    <img onClick={editHandler} name="vrijemePripreme" src="/media/edit.png" />
                </div>
            </div>
            <div>
                <div className="d-flex flex-row"><h3>Sastojci</h3>
                    <img onClick={editHandler} name="sastojci" src="/media/edit.png" />
                </div>
                <p>{currRecept.sastojci}</p>
            </div>
            <div>
                <div className="d-flex flex-row">
                    <h3>Upute</h3>
                    <img onClick={editHandler} name="upute" src="/media/edit.png" />
                </div>
                <div id="upute">
                    <p>{currRecept.upute}</p>
                </div>
            </div>
            <Link onClick={deleteHandler} to="/">
                <button className="btn btn-primary">Izbriši</button>
            </Link>

        </div>
    )
}
