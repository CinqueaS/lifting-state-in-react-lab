// src/App.jsx

import './App.css';
import IngredientList from './components/IngredientList';
import BurgerStack from './components/BurgerStack';
import { useState } from 'react'

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

const App = () => {

  const [stack, setStack] = useState([])

  const addToStack = (ingredient) => {
    const updatedStack = [...stack, ingredient]
    setStack(updatedStack)
    console.log(updatedStack)
  };

  const removeFromStack = (existingIngredient) => {
    const ingredientExists = stack.some((ingredient) => ingredient.name === existingIngredient.name)
    if (ingredientExists) {
      const newStack = stack.filter((ingredient) => ingredient.name !== existingIngredient.name)
      setStack(newStack)
    } else {
      console.log("nothing happened")
    }
  }

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
      <IngredientList ingredients={availableIngredients} addToStack={addToStack}/>
      <BurgerStack stack={stack} removeFromStack={removeFromStack}/>
      </section>
    </main>
  );
};

export default App;
