"use strict";

// update the main food tracker --> submitting a new entry
function AddEntry(){
    var food = document.getElementById("food_item").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time_of_day").value;
    var calories = document.getElementById("calories").value;
    
    // var check = isFormComplete(food, date, time, calories);
    // if (check){
    //     ResetForm();
    // }

    // Check if existing json file exists, if does then update and write to that
    // Else, create json and write to that

    
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
    var file_content;
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
    
    // var test;
    //     $.getJSON("/Example.json", function(data){
    //         var temp = JSON.stringify(data);
    //         var parsedJSON = JSON.parse(temp);
    //         test = parsedJSON;
    //     });




    //     var dict = {};
//     var jsonFile = $.getJSON("/Example.json", function(data) {
//         $.each(data, function(key, value){
//             var k = key;
//             dict["k"] = [];
//             $.each(value, function(index, value){
//                 $.each(value, function(key, value){
//                     console.log(key + "---" + value);
//                     dict["k"].push  
//                 });
//             });  
//         });
//     });
}

function WriteJsonFile(x, y, z, a){
    
}

// Displays the content of the JsonFile into the wrapper container
function DisplayJsonFile(input_list){
    var wrapper = $("#wrapper"), container;
    for (var key in input_list){
        container = $('<div id="list_displayed" class="container"></div>');
        wrapper.append(container);
        container.append('<div class="date">' + key + '</div>');
        for (const dict of input_list[key]){
            container.append('<div class="name">' + dict.name + '</div>');
            container.append('<div class="time">' + dict.time + '</div>');
            container.append('<div class="calories">' + dict.calories + " Cals" + '</div>');

        }
    }
}

// A function temporary used to call functions
function throwaway(){
    var temp = ReadJsonFile();
    console.log(temp);
    DisplayJsonFile(temp);
}
