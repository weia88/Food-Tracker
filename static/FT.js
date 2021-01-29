"use strict";

window.file_content = null; //global

// update the main food tracker --> submitting a new entry
function AddEntry(){
    var food = document.getElementById("food_item").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time_of_day").value;
    var calories = document.getElementById("calories").value;
    
    var check = isFormComplete(food, date, time, calories);
    if (check){
        //does a JSON file exist?
        WriteJsonFile(food, date, time, calories); // Is this function neccessary?
        ResetForm();
    }
    
}

function ResetForm(){
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

// Reads the Json file in explorer 
function ReadJsonFile(){
    var url = "/Example.json";
    $.ajax({
        type:"GET",
        url: url,
        dataType:"json",
        success: function(data) {
            var temp = JSON.stringify(data);
            var parsedJSON = JSON.parse(temp);
            file_content = parsedJSON;
        },
        async: false  
    });
    return file_content;
}

// Adds element to a date
// ToDo: Does not order array based on time of day*
// Below code does not work, Writing to local file system is not allowed...without effort

function WriteJsonFile(x, y, z, a){
    var foodItem = x;
    var dateKey = y; // Aka key
    var timeValue = z;
    var calValue= Number(a);

    if (dateKey in file_content){
        //add under existing key
        file_content[dateKey].push({name: foodItem, time: timeValue, calories: calValue});
    } else {
        //add key/date and elements under key 
    }

    // localStorage.setItem('Example', JSON.stringify(file_content));
    // var retrieved = localStorage.getItem('/Example1');
    // console.log(JSON.parse(retrieved));
}

// Displays the content of the JsonFile into the wrapper container
function DisplayJsonFile(){
    var wrapper = $("#wrapper"), container;
    for (var key in file_content){
        container = $('<div id="list_displayed" class="container"></div>');
        wrapper.append(container);
        container.append('<div class="date">' + key + '</div>');
        for (const dict of file_content[key]){
            container.append('<div class="name">' + dict.name + '</div>');
            container.append('<div class="time">' + dict.time + '</div>');
            container.append('<div class="calories">' + dict.calories + " Cals" + '</div>');
        }
    }
}

// A function temporary used to call functions
function throwaway(){
    var temp = ReadJsonFile();
    DisplayJsonFile(temp);
}
