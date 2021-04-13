import React from 'react'
import { Link } from 'react-router-dom';

export default function ReceptInfo(props, recepti, definirajRecepte) {
    
    const currID = props.match.params.id;
    
    console.log(recepti);
    //const recepti = props.location.recepti;
    //const definirajRecepte = props.location.definirajRecepte;
    let currRecept = props.location.state;

    let key = props.location.key;


    const deleteHandler = () => {
        definirajRecepte(recepti.filter((element) => element.id !== currID));
    }

    const editHandler = (e) => {
        
        const text = prompt("Unesi novo:");
        definirajRecepte([
            recepti[key] = {
                ...recepti[key],
                [e.target.name]: text
            }
        ])


        /* recepti.map((recept) => {
            
            (recept.id === currID ?
            () : (<h1></h1>))
            currRecept = recept;
        }) */
            
        
        
    }

    return (
        <div className="mx-3">
            <h2>{currID}</h2>
            <div>
                <h2>{currRecept.naslov}</h2>
                <img onClick={editHandler} name="naslov" src="/media/edit.png" />
            </div>
            <div>
                <h3>Vrijeme pripreme: <a>{currRecept.vrijemePripreme}</a></h3>
                <img onClick={editHandler} name="vrijemePripreme" src="/media/edit.png" />
            </div>
            <div>
                <h3>Sastojci</h3>
                <img onClick={editHandler} name="sastojci" src="/media/edit.png" />
                <div>
                    <p>{currRecept.sastojci}</p>
                </div>
            </div>
            <div>
                <h3>Upute</h3>
                <img onClick={editHandler} name="upute" src="/media/edit.png" />
                <div>
                    <p>{currRecept.upute}</p>
                </div>
            </div>
            <Link to="/" onClick={deleteHandler}>
                <button>Izbriši</button>
            </Link>
            
        </div>
    )
}
