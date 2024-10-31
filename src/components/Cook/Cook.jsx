// import React from 'react';

import { useState, useEffect } from "react";
import Recipe from "../Recipe/Recipe";


const Cook = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("recipeData.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  console.log(recipes);
  return (
    <section className="mb-6 sm:mt-16 mt-5 sm:mx-10 px-2 text-center">
      <h2 className="text-4xl font-bold">Our Recipes</h2>
      <p className="my-3 w-4/5 sm:w-4/6 mx-auto mb-12">
        Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
        vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum
        mauris aenean neque.{" "}
      </p>

      <div className="flex gap-3">
        {/* Recipe Div */}
        <div className="grid grid-cols-2 gap-4 w-3/5 text-left">
          {recipes.length &&
            recipes.map((recipe) => (
              <Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>
            ))}
        </div>
        <div
          className="text-center h-fit p-2 rounded-lg w-2/5"
          style={{ border: "2px solid gray" }}
        >
          <h2 className="font-bold text-2xl mx-auto w-full">
            Want to cook : <span id="preparingQuantity">0</span>
          </h2>
          <hr className=" w-4/5 mx-auto border-1 border-solid border-black my-2" />
          <table className="w-full">
            
            <thead>
                 <tr>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                 </tr>
            </thead>
            <tbody id="firstTbody" className="">
                
            </tbody>
           
          </table>
          <h2 className="font-bold text-2xl mx-auto w-full  mt-7">
            Currently cooking : <span id="currentCookingQuantity">0</span>
          </h2>
          <hr className=" w-4/5 mx-auto border-1 border-solid border-black my-2" />
          <table className="w-full">
            
            <thead>
                 <tr>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                 </tr>
            </thead>
            <tbody id="secondTbody" className="" style={{border : '2px solid gray'}}>
                
            </tbody>
           
          </table>
        </div>
      </div>
    </section>
  );
};

export default Cook;
