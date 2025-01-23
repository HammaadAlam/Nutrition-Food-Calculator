function getNutritionValue() {
    const searchQuery = document.getElementById('user-input').value;
    
    console.log(searchQuery);
    const apiUrl = `https://trackapi.nutritionix.com/v2/natural/nutrients`

    fetch(apiUrl, {
        "method": "POST",
        "headers": {
            "x-app-id":  "92aab985",
            "x-app-key": "3bf858d3a6bf0bb5db860fd709c00053",
            "x-remote-user-id": 0
        }
        {
        "query":"1 cup chicken noodle soup"
        }
    })
    .then(response => response.json())
    .then(response => {
        console.log(response)
    })
    .catch(err => {
        console.log(err)
    })
}