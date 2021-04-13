import React from "react";
import Recepti from "./Recepti";
import Favoriti from "./Favoriti";
import { Link } from "react-router-dom";


const Home = ({recepti, definirajRecepte/*, favoriti, definirajFavorite*/}) => {


    

    return (
        <div id="home" className="mx-3">
            <h2>Favoriti</h2>
            <Favoriti recepti={recepti} definirajRecepte={definirajRecepte} /*favoriti={favoriti} definirajFavorite={definirajFavorite}*//>
            <h2>Svi recepti</h2>
            <Recepti recepti={recepti} definirajRecepte={definirajRecepte} /* definirajFavorite={definirajFavorite} *//>
            
            <Link to="/noviRecept">
                <button>Dodaj novi recept</button>
            </Link>

        </div>
        /*
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
        */
    );
}

export default Home;