// import React from 'react';
import PropTypes from "prop-types";
import { handleSettingRecipe } from "../../js/cook";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

const Recipe = ({recipe}) => {
  
    const [isClicked, setIsClicked] = useState(false);

    const { recipe_name, recipe_image, description,ingredients,preparing_time,calories} = recipe;
    // react Toast message func
    const notify = () => {

        toast.warn("Already Added!", {
            position: "top-center"
          });
       
    };

    return (
        <div className='border-2 border-solid border-[#1c2b35] rounded-lg flex flex-col'>
        <img className='p-2 rounded-2xl h-[180px]' src={recipe_image} alt="" />
        <div className='px-2 pb-3 flex-1'>
            <h2 className='font-bold text-[#037ac9] text-xl'>{recipe_name}</h2>
           <p className="my-2"> {description} </p>
           <hr />
           <p className="font-semibold text-lg mt-2">Ingredients : {ingredients.length}</p>
           <ul className="list-disc px-6">
              {
                 ingredients.map((ingredient, indx) => <li key={indx}>{ingredient}</li>)
              }
           </ul>
           <hr className="my-2" />
            <div className="flex items-center gap-4">
                <p> <span><i className="fa-regular fa-clock"></i></span> {preparing_time} </p>
                <p><span><i className="fa-solid fa-fire-flame-simple"></i></span> {calories}</p>
            </div>
        </div>
        <button onClick={()=> handleSettingRecipe(recipe,notify,isClicked,setIsClicked)} className='bg-[#1c2b35] hover:bg-[#024774] font-semibold text-white w-full py-2 flex justify-center items-center gap-3'>Want to Cook </button>
        <ToastContainer />
    </div>
    );
};


Recipe.propTypes = {
    recipe: PropTypes.object
};
export default Recipe;