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
  return (
    <section className="mb-6 sm:mt-16 mt-5 sm:mx-10 px-2 text-center">
      <h2 className="text-4xl font-bold">Our Recipes</h2>
      <p className="my-3 w-[90%] sm:w-4/6 mx-auto sm:mb-12">
        Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
        vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum
        mauris aenean neque.{" "}
      </p>

      <div className="flex sm:flex-row flex-col-reverse gap-3">
        {/* Recipe Div */}
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 sm:w-3/5 w-full text-left">
          {recipes.length &&
            recipes.map((recipe) => (
              <Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>
            ))}
        </div>
        <div
          className="text-center h-fit p-2 rounded-lg w-full sm:w-2/5"
          style={{ border: "2px solid gray" }}
        >
          <h2 className="font-bold text-2xl mx-auto w-full">
            Want to cook : <span id="preparingQuantity">0</span>
          </h2>
          <hr className=" w-4/5 mx-auto border-1 border-solid border-black my-2" />
          <table className="w-full">
            
            <thead>
                 <tr>
                    <th className="" colSpan={2}>Name</th>
                    <th>Time</th>
                    <th colSpan={2}>Calories</th>
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
                    <th colSpan={2}>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                 </tr>
            </thead>
            <tbody id="secondTbody">
                
            </tbody>
             <tfoot>
               <tr>
                <td></td>
                <td className="py-4 font-bold">Total Time : 0</td>
                <td className="font-bold pl-3">Total Calories : 0</td>
               </tr>
             </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Cook;
