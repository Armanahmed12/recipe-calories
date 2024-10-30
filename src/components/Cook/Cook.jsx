// import React from 'react';

import { useState, useEffect } from "react";
import Recipe from "../Recipe/Recipe";

const Cook = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(()=>{

         fetch('recipeData.json')
         .then(res => res.json())
         .then(data => setRecipes(data))
         

    },[]);
    console.log(recipes);
    return (
        <section className='mb-6 sm:mt-16 mt-5 sm:mx-10 px-2 text-center'>
             <h2 className="text-4xl font-bold">Our Recipes</h2>
             <p className="my-3 w-4/5 sm:w-4/6 mx-auto mb-12">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            
             <div className="flex items-center">
                 
                    {/* Recipe Div */}
                     <div className="grid grid-cols-2 gap-4 w-3/5 text-left">
                           {
                              recipes.length && recipes.map(recipe => <Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>)
                           }   
                     </div>
                     <div>
                         
                     </div>
             </div>
        </section>
    );
};

export default Cook;