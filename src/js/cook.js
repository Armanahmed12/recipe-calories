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
     tr.innerHTML = `<td>${serialNum}</td>
                     <td>${recipe.recipe_name}</td>
                     <td>${recipe.preparing_time}</td>
                     <td>${recipe.calories}</td>
                     <button class="bg-green-500 px-4 py-2 rounded-2xl font-semibold text-white my-3">Preparing</button>`;
     firstTbody.appendChild(tr);  
     //making click btn clicked

      // Add event listener to the button
    tr.querySelector('button').addEventListener('click', (e)=>{

        e.target.parentNode.remove();
         handleAddingToCooking(recipe);
         reduceAddedRecipeQuantity();
         updateSerialNumbers();
        
    });            
     
}

const updateSerialNumbers = () => {

    const rows = document.querySelectorAll('#firstTbody tr'); // Get all rows in the tbody
    rows.forEach((row, index) => {
        // Get the first cell (serial number cell)
        const serialCell = row.cells[0]; 
        console.log(row,serialCell,index);
        serialCell.innerText = index + 1 + '.';
        
    });
      
      
    serialNum = rows.length; // Update the serial number tracker
    console.log(rows, serialNum);
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
     tr.innerHTML = `<td>${increasedNum}.</td>
                     <td>${recipe.recipe_name}</td>
                     <td>${recipe.preparing_time}</td>
                     <td>${recipe.calories}</td>
                    `;
     secondTbody.appendChild(tr);  
       
}

export {handleSettingRecipe,handleAddingToCooking};