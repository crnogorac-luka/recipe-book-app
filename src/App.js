import React, { useState }/*, { useState }*/ from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import './css/App.css';

import Header from "./components/Header";
import Home from "./components/Home";
import NoviRecept from "./components/NoviRecept";
import ReceptInfo from "./components/ReceptInfo";



function App() {

  //const [inputText, setInputText] = useState("");

  const [recepti, definirajRecepte] = useState([
    {
      index: 0,
      naslov: "Pizza",
      vrijemePripreme: "30 min.",
      sastojci: "500g bijelog brašna",
      upute: "Izmjesiti tijesto. Staviti da se peče 20 min.",
      favorit: false,
      id: 5.348257
    },
    {
      index: 1,
      naslov: "Pasta Carbonara",
      vrijemePripreme: "50 min.",
      sastojci: "500g tjestenine, umak od rajčice",
      upute: "Staviti tjesteninu u kipuću vodu. Pripremiti umak.",
      favorit: true,
      id: 2.836026
    },
    {
      index: 2,
      naslov: "Štrudla s makom",
      vrijemePripreme: "70 min.",
      sastojci: "500g bijelog brašna, 200g maka",
      upute: "Izmjesiti tijesto. Nanijeti slojeve maka.",
      favorit: false,
      id: 8.26848935
    },
  ]);

  const [favoriti, definirajFavorite] = useState([
    {
      index: 1,
      naslov: "Pasta Carbonara",
      vrijemePripreme: "50 min.",
      sastojci: "500g tjestenine, umak od rajčice",
      upute: "Staviti tjesteninu u kipuću vodu. Pripremiti umak.",
      favorit: true,
      id: 2.836026
    }
  ]);

  const [index, setIndex] = useState(3);

  return (
    <div className="App">

      <Router>
        <Header />
        <Switch>
          <Route path="/recept/:id" render={props =>
            (<ReceptInfo {...props} recepti={recepti} definirajRecepte={definirajRecepte} favoriti={favoriti} definirajFavorite={definirajFavorite} index={index} setIndex={setIndex} />)
          } />
          <Route path="/noviRecept" render={props =>
            (<NoviRecept {...props} recepti={recepti} definirajRecepte={definirajRecepte} index={index} setIndex={setIndex} />)
          } />
          <Route path="/" render={props =>
            (<Home {...props} recepti={recepti} definirajRecepte={definirajRecepte} favoriti={favoriti} definirajFavorite={definirajFavorite} index={index} setIndex={setIndex} />)
          } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
