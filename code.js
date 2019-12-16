var input = [];
var output = 0;
var t1 = 0;
var t2 = 0;

//variables setting start 
function reset(){
    input = [];
    output = 0;
    t1 = 0;
    t2 = 0;
}
//variables setting end

//caller functions start
function start(){
    reset();
    t1 = prompt("how many inputs do you want");//asking for how many inputs are wanted 
    do{// repeat until loop
        t2 = 0;
        t2 = prompt("Enter values for the array");//this is how the inputs are entered 
        input.push(t2);
    }while(input.length < t1);//waiting for condition to be met
    t1 = 0;
    input.sort(sortNumber);
    checking();
    if(t1 == 0){
    logic();
    }
}
//caller functions end 

//logic for sorting the numbers start 
function sortNumber(a, b) {
    return a - b;
}
//logic for sorting the numbers end 

// logic for finding the median start
function logic(){
    var i = 0;
    t1 = 0;
    t2 = 0;
    if(input.length % 2 == 0){
        t1 = input.length / 2;
        i = t1;
        t1 = t1 - 1;
        t2 = input[i] + input[t1];
        output = t2 / 2;
        console.log(output);
    }else{
        t1 = input.length / 2;
        t1 = t1 - 0.5;
        output = input[t1];
        console.log(output);
    }
}
//logic for finding the median end 

// logic for checking the input end 
function checking(){
    i = 0;
    do{
        if(input[i] > 0){
            if(input[i] / 1 == input[i]){
                i = i + 1;
            }else{
                console.log("you have something other then a positive integer");
                i = i + 1;
                t1 = 1;
            }
        }else{
            console.log("you have something other then a positive integer");
            i = i + 1;
            t1 = 1;
        }
    }while(i < input.length);
}
//logic for checking the input end 