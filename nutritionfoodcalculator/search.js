let tcal = 0;
let tp = 0;
let tc = 0;
let tf = 0;

function getNutritionValue() {
    const searchQuery = document.getElementById('user-input').value;
    
    console.log(searchQuery);
    const apiUrl = 'https://api.edamam.com/api/food-database/v2/parser?app_id=c327744d&app_key=5b08e39a3b74440c01b1e115ea806fce&ingr=' + encodeURIComponent(searchQuery);
    console.log(apiUrl)

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        let cal = data["hints"][0]["food"]["nutrients"]["ENERC_KCAL"]
        let p = data["hints"][0]["food"]["nutrients"]["PROCNT"]
        let c = data["hints"][0]["food"]["nutrients"]["CHOCDF"]
        let f = data["hints"][0]["food"]["nutrients"]["FAT"]


        const newParagraph = document.createElement("p");
        newParagraph.textContent = 'Calories: ' + cal + ' Protein: ' + p + ' Carbs: ' + c + ' Fat: ' + f;
        document.body.appendChild(newParagraph);

        tcal+=cal;
        tp+=p;
        tc+=c;
        tf+=f;
        const totalParagraph = document.getElementById("total");
        totalParagraph.textContent = '|TOTAL| Calories: ' + tcal.toFixed(1) + ' Protein: ' + tp.toFixed(1) + ' Carbs: ' + tc.toFixed(1) + ' Fat: ' + tf.toFixed(1);
    })  
    .catch(err => {
        console.log(err)
    })

    
}