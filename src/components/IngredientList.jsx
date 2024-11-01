const IngredientList = (props) => {

    return ( 
        <ul>
            {props.ingredients.map((ingredient, index) => {
                return ( <li>{ingredient.name}<button onClick={() => {props.addToStack(ingredient)}}>+</button></li>
                )
            })}
        </ul>
    )
  };
  
  export default IngredientList;
  