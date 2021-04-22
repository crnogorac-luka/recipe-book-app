import React, { useState } from 'react';
import { Link } from "react-router-dom";


export default function NoviRecept({ recepti, definirajRecepte}) {

    const [info, setInfo] = useState({
        naslov: "",
        vrijemePripreme: "",
        sastojci: "",
        upute: ""
    });


    //metoda koja biljezi sve sto je uneseno
    const inputHandler = (e) => {
        const inputText = e.target.value;
        setInfo({
            ...info,
            [e.target.id]: inputText
        });
    }

    //metoda koja stvara novi recept s podacima
    //koji su uneseni i sprema ga u listu
    const dodajRecept = (e) => {
        e.preventDefault();
        if (recepti.length == 0) {
            definirajRecepte([
                {
                    naslov: info.naslov,
                    vrijemePripreme: info.vrijemePripreme,
                    sastojci: info.sastojci,
                    upute: info.upute,
                    favorit: false,
                    id: Math.random() * 10
                }
            ]);
        } else {
            definirajRecepte([
                ...recepti, {
                    naslov: info.naslov,
                    vrijemePripreme: info.vrijemePripreme,
                    sastojci: info.sastojci,
                    upute: info.upute,
                    favorit: false,
                    id: Math.random() * 10
                }
            ]);
        }

    }



    return (
        <div id="noviRecept" className="mx-3 mt-4">
            <form onSubmit={dodajRecept}>
                <div className="mb-3">
                    <label for="naslov" className="form-label">Naslov</label>
                    <input onChange={inputHandler} type="text" className="form-control" id="naslov" aria-describedby="naslov" />
                </div>
                <div className="mb-3">
                    <label for="vrijemePripreme" className="form-label">Vrijeme pripreme</label>
                    <input onChange={inputHandler} type="text" className="form-control" id="vrijemePripreme" aria-describedby="vrijemePripreme" />
                </div>
                <div className="mb-3">
                    <label for="sastojci" className="form-label">Sastojci</label>
                    <textarea onChange={inputHandler} rows="5" className="form-control" id="sastojci" aria-describedby="sastojci" />
                </div>
                <div className="mb-3">
                    <label for="upute" className="form-label">Upute (6-10 rečenica)</label>
                    <textarea onChange={inputHandler} rows="10" className="form-control" id="upute" aria-describedby="upute" />
                </div>
                <button type="submit" className="btn btn-primary">Spremi</button>
                <Link to="/">
                    <button type="button" className="btn btn-danger">Odustani</button>
                </Link>

            </form>
        </div>
    )
}
