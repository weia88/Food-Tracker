"use strict";

function updateTracker(){
    var food = document.getElementById("food_item").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time_of_day").value;
    var calories = document.getElementById("calories").value;
    console.log(food + date + time + calories);
    
    var check = isFormComplete(food, date, time, calories);
    console.log(check);
    if (check){
        resetForm();
    }
    
}

function resetForm(){
    // document.getElementById("form1").reset(); this shit shouldn't be broken but it is
    document.getElementById("food_item").value = "";
    document.getElementById("date").value = "";
    document.getElementById("time_of_day").value = "";
    document.getElementById("calories").value = "";
    alert("Submitted!");
}

// Checks to see that all input fields of the form are complete 
// if not, form will not be submitted
function isFormComplete(food, date, time, calories){
    var errorMsg = "";
    if(!food){
        errorMsg += "Food missing";   
    }
    if(!date){
        if(errorMsg != ""){
            errorMsg += "\n";
        }
        errorMsg += "Date missing";
    }
    if(time == 0){
        if(errorMsg != ""){
            errorMsg += "\n";
        }
        errorMsg += "Time missing";
    }
    if(calories == 0){
        if(errorMsg != ""){
            errorMsg += "\n";
        }
        errorMsg += "Calories missing";
    }
    
    if (errorMsg != ""){
        alert(errorMsg);
        return false;
    }
    
    return true; 
}

