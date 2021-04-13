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

  const [recepti, definirajRecepte] = useState([]);

  //const [favoriti, definirajFavorite] = [recepti, definirajRecepte];

  return (
    <div className="App">

      <Router>
        <Header />
        <Switch>
          <Route path="/recept/" render={props =>
            (<ReceptInfo {...props} recepti={recepti} definirajRecepte={definirajRecepte}/>)
          } />
          <Route path="/noviRecept" render={props =>
            (<NoviRecept {...props} recepti={recepti} definirajRecepte={definirajRecepte} />)
          } />
          <Route path="/" render={props =>
            (<Home {...props} recepti={recepti} definirajRecepte={definirajRecepte} /* favoriti={favoriti} definirajFavorite={definirajFavorite} */ />)
          } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
