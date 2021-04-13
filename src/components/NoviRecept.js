import React, { useState } from 'react';



export default function NoviRecept({ recepti, definirajRecepte }) {

    const [info, setInfo] = useState({
        naslov: "",
        vrijemePripreme: "",
        sastojci: "",
        upute: ""
    });

    const inputHandler = (e) => {
        const inputText = e.target.value;
        setInfo({
            ...info,
            [e.target.id]: inputText
        });
    }

    const dodajRecept = (e) => {
        e.preventDefault();
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

    

    return (
        <div>
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
                    <label for="upute" className="form-label">Upute</label>
                    <textarea onChange={inputHandler} rows="10" className="form-control" id="upute" aria-describedby="upute" />
                </div>
                <button type="submit" className="btn btn-primary">Spremi</button>
                <button type="button" className="btn btn-danger">Odustani</button>
            </form>
        </div>
    )
}
