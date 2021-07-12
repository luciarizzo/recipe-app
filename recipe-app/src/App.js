//import logo from './logo.svg';
import { useEffect, useState } from "react";
import Recipe from "./components/Recipe/Recipe";
import logo from "./img/logo.png";
import './App.css';

const App = () => {
    const APP_ID = "a8fefdf0";
    const APP_KEY = "a2f2e83fca2cf2d4a13af53a32ab3f8a";
    const [recipes, setRecipes] = useState([]);
   // const [counter, setCounter] =  useState(0);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');
    const [welcome, setWelcome] = useState("Welcome! Write an ingredient and recipes will show up");

    useEffect(() => {
      getRecipes();
    }, [query]);

    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=a8fefdf0&app_key=a2f2e83fca2cf2d4a13af53a32ab3f8a`);
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
    };

    const updateSearch = e =>{
      setSearch(e.target.value);
    };

    const getSearch = e => {
      e.preventDefault();
      setWelcome("");
      setQuery(search);
      setSearch('');
    }
    return (
    <div className="App">
      <div className="header">
        <img src={logo}/>
        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
          <button className="search-button" type="submit">Search</button>
        </form>
      </div>
      <div className="welcome">
        <p>{welcome}</p>
      </div>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe 
        //key={counter}
        title={recipe.recipe.label} calories={Math.round(recipe.recipe.calories)}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>  
    )
};

export default App;