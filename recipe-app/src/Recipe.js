import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div className={style.recipe}>
        <h1 > {title} </h1>
        <p> {calories} cal </p>
        <img src={image} alt=""/>
        <p >{ingredients.map(ingredient =>(
            <p className="ingredients">{ingredient.text}</p>
        ))}</p>
        </div>
    );
}

export default Recipe;