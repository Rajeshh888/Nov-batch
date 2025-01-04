//if-else
var age = 19;
if(age > 18) {
    console.log('Age is greater than 18');
}
else{
    console.log('Age is lesser than 18');
}

//switch()

let day="Tuesday";

switch(day) {
    case "Monday":
        console.log("Start of the work week");
        break;
    case "Tuesday":
        console.log("It is the  Tuesday");
         break;
    case "Friday":
        console.log("End of the work week");
        break;
    case "Sunday":
        console.log("End of the week");
         break;
}


    //for loop
    for (var i=0; i<=10; i++){
        console.log(i);
    }

    //while loop
    let count = 1;
    while (count <= 5) {
        console.log("count is:", count);
        count++;
    }

    //do while
    let number=1;

    do {
        console.log("Number:",number);
        number++;
    } while (number <= 3);

    //for of loop
    var arr=[100,200,300,400]
    for(var i of arr) {
        console.log(i);
    }

    //for in loop

    var arr1=['Priya', 'Ankiy','Neha']
    for (var i in arr1){
        console.log(i);
    }


    //for each loop
    var arr3=[10,20,30,40]
    arr3.forEach((ele,index,complete_array)=>{
        console.log(ele,index,complete_array);
    })


    //break
    for(let i=1;i<=5;i++){
        if(i===3)
        {
            console.log(i);
            break;
        }
    }


    //continue
    for(let i=1;i<=5;i++){
        if(i===3)
        {
            console.log(i);
            continue;
        }
    }
         

             
    
