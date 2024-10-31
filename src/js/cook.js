// getIncreased Num
function setIncreasedNum(){

    // increasing the number of added Recipe
    const preparationQuantity = document.getElementById('preparingQuantity');
    const increasedNum = parseInt(preparationQuantity.innerText) + 1;
    preparationQuantity.innerText = increasedNum;
    
}

function reduceAddedRecipeQuantity(){

      
     // decreasing the number of added recipe
     const preparationQuantity = document.getElementById('preparingQuantity');
     const increasedNum = parseInt(preparationQuantity.innerText) - 1;
     preparationQuantity.innerText = increasedNum;
}

// handle adding to preparing Recipes
let serialNum = 0;
const handleSettingRecipe = (recipe, notify, isClicked, setIsClicked) =>{

    if(isClicked){
       
         notify();
         return;

    }else{
     setIsClicked(!isClicked);
      serialNum++;
    }

    // increasing the quantity of Added Recipe
    setIncreasedNum();

    //  adding one recipe item
     const firstTbody = document.getElementById('firstTbody');
     const tr = document.createElement('tr');
     tr.setAttribute('class', 'bg-red-50 py-2');
     tr.innerHTML = `<td class="pl-3 mt-3">${serialNum}</td>
                     <td>${recipe.recipe_name}</td>
                     <td>${recipe.preparing_time}</td>
                     <td>${recipe.calories} <button class="bg-green-500 px-4 py-2 rounded-2xl font-semibold text-white my-3 ml-2">Preparing</button> </td>
                     `;
     firstTbody.appendChild(tr);  
     //making click btn clicked

      // Add event listener to the button
    tr.querySelector('button').addEventListener('click', (e)=>{

        e.target.parentNode.parentNode.remove();
         handleAddingToCooking(recipe);
         reduceAddedRecipeQuantity();
         updateSerialNumbers();
         setTotalTimeAndCalories(recipe);
        
    });            
     
}

const updateSerialNumbers = () => {

    const rows = document.querySelectorAll('#firstTbody tr'); // Get all rows in the tbody
    rows.forEach((row, index) => {
        // Get the first cell (serial number cell)
        const serialCell = row.cells[0]; 
        serialCell.innerText = index + 1 + '.';
        
    });
      
      
    serialNum = rows.length; // Update the serial number tracker

};

// handle adding to "current-Cooking" section
const handleAddingToCooking = (recipe)=>{

    // increasing the number of current quantity 
    const currentCookingQuantity = document.getElementById('currentCookingQuantity');
    const increasedNum = parseInt(currentCookingQuantity.innerText) + 1;
    currentCookingQuantity.innerText = increasedNum;
    
    //  adding Item
     const secondTbody = document.getElementById('secondTbody');
     const tr = document.createElement('tr');
     tr.setAttribute('class', 'bg-blue-50 py-2');
     tr.innerHTML = `<td class='pl-2'>${increasedNum}.</td>
                     <td>${recipe.recipe_name}</td>
                     <td class='p-4'>${recipe.preparing_time}</td>
                     <td>${recipe.calories}</td>
                    `;
     secondTbody.appendChild(tr);  
       
}

// set totalTime and TotalCalories in the TfootTag
const setTotalTimeAndCalories = ({preparing_time, calories}) =>{

    //  PreparingTime & Calories
    const preparingTime = parseInt(preparing_time.split(' ')[0]);
    const recipeCalories = parseInt(calories.split(' ')[0]);
    
    // setting updated data to the Tfoot
   const tFoot = document.querySelector('tfoot tr');
   const currentTotalTime = parseInt(tFoot.cells[1].innerText.split(' ')[3]);
   console.log(currentTotalTime); 
   const currentTotalCalories = parseInt(tFoot.cells[2].innerText.split(' ')[3]);
   
   tFoot.cells[1].innerText = 
   `Total Minutes : ${preparingTime + currentTotalTime} minutes`;

   tFoot.cells[2].innerText = 
   ` Total Calories : ${recipeCalories + currentTotalCalories} calories`;
    
}

export {handleSettingRecipe,handleAddingToCooking};