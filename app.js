

function meal() {
   const search = document.getElementById('search-field').value;
   const url3 = `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`


   fetch(url3)
      .then(res => res.json())
      .then(data => mealPreview(data.meals))

}

const mealPreview = (allMeals) => {


   document.getElementById('meal-preview').innerHTML = '';

   for (let i = 0; i < allMeals.length; i++) {
      const singleMeal = allMeals[i];
      const foundMeal = document.createElement("div");
      foundMeal.className = 'meal-ui'
      const mealPreview = document.getElementById('meal-preview');
      foundMeal.innerHTML =
         `
      <img src='${singleMeal.strMealThumb}'>
      <h1>${singleMeal.strMeal}</h1>
      
      `
      mealPreview.appendChild(foundMeal)
      foundMeal.addEventListener('click', function eventCapture(e) {
         const clickedMeal = e.target.innerText;
         const url2 = `https://www.themealdb.com/api/json/v1/1/search.php?s=${clickedMeal}`
         console.log(url2)
         fetch(url2)
            .then(res => res.json())
            .then(data => recipe(data.meals))

         const recipe = (detail) => {
            document.getElementById('meal-preview').innerHTML = '';
            for (let i = 0; i < detail.length; i++) {
               const element = detail[i];




               const recipeDiv = document.createElement('div');
               recipeDiv.className = 'recipe'
               recipeDiv.innerHTML = `
            <img src='${element.strMealThumb}'<br>
            <h2>${element.strMeal}</h2>  
            <p1>Category: ${element.strCategory}</p1>
            <p1>Area : ${element.strArea}</p1> <br> <br>
            <p1>Instruction : ${element.strInstructions}</p1>
            <br>
            <p1> Ingredients </p1>
            <ul> 
                <li>
                  ${element.strIngredient1} - ${element.strMeasure1}<br>
                  ${element.strIngredient2} - ${element.strMeasure2}<br>
                  ${element.strIngredient3} - ${element.strMeasure3}<br>
                  ${element.strIngredient4} - ${element.strMeasure4}<br>
                  ${element.strIngredient5} - ${element.strMeasure5}<br>
                  ${element.strIngredient6} - ${element.strMeasure6}<br>
                  ${element.strIngredient7} - ${element.strMeasure7}<br>
                  ${element.strIngredient8} - ${element.strMeasure8}<br>
                  ${element.strIngredient9} - ${element.strMeasure9}<br>
                  ${element.strIngredient10} - ${element.strMeasure10}<br>
                  ${element.strIngredient11} - ${element.strMeasure11}<br>
                  ${element.strIngredient12} - ${element.strMeasure12}<br>
                  ${element.strIngredient13} - ${element.strMeasure13}<br>
                  ${element.strIngredient14} - ${element.strMeasure14}<br>
                  ${element.strIngredient15} - ${element.strMeasure15}<br>
                  ${element.strIngredient16} - ${element.strMeasure16}<br>
                  ${element.strIngredient17} - ${element.strMeasure17}<br>
                  ${element.strIngredient18} - ${element.strMeasure18}<br>
                  ${element.strIngredient19} - ${element.strMeasure19}<br>
                  ${element.strIngredient20} - ${element.strMeasure20}<br>
                  
            
            
            
                </li>
            
            </ul>

              `
               document.getElementById('meal-preview').appendChild(recipeDiv);
               console.log(detail)

            }



         }
      })

   }

}




// for (let i = 0; i <20; i++) {
//    if ( detail[`strIngredient${i}`]) {
//     ingredients.push(
//       `${detail[`strIngredient${i}`]} - ${detail[`strMeasure${i}`]}      `

//     )

//    }
//    else{
//       break;
//    }



// }