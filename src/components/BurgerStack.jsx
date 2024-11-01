const BurgerStack = (props) => {
    return ( 
        <ul>
            {props.stack.map((ingredient, index) => {
                return ( <li>{ingredient.name}<button onClick={() => {props.removeFromStack(ingredient)}}>X</button></li>
                )
            })}
        </ul>
    )
};


  export default BurgerStack;
  