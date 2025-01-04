var arr1 = [10,11,12,13,14,15]
var newArr = arr1.filter(function(ele){
    if(ele%2 == 0){
        return ele;
    }
})
console.log('Original Array:',arr1)
console.log('Even Array: ',newArr)

//using arrow function
var arr1 = [10,11,12,13,14,15]
var newArr = arr1.filter((ele)=>ele%2===0);
console.log('Original Array:',arr1)
console.log('Even Array: ',newArr)


//array.map(function(ele){})
var array = [1,2,3,4,5,6]
var sq_arr = array.map(function(ele){
    return ele * ele;
})
console.log('Original Array: ',array);
console.log('Square Array: ',sq_arr);

//using arrow function
var array = [1,2,3,4,5,6]
var sq_arr=array.map((ele)=>ele * ele);
var new_arr=array.map((ele)=>ele+5);
console.log('Original Array: ',array);
console.log('Square Array: ',sq_arr);
console.log('Added Array: ',new_arr);

//adding array elements
var array = [1,2,3,4]
var sum=0;
for(var i=0;i<=array.length-1;i++){
    sum=sum+array[i];
}
console.log(sum);

//adding using reduce
var array=[1,2,3,4]
var sum=array.reduce((acc,ele)=>acc+ele,0);
console.log(sum);
