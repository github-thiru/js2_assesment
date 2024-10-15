///print the even numbers in the array
let arr=[1,2,3,4,5,6,7,8,9,10]
for(i=0;i<=10;i++){
    if(arr[i]%2==0){
        console.log(arr[i])
    }  
}


//practice the array methods with 3 examples each

let fruits=['Apple','Banana','cherry','Ball'];
let Afruits=fruits.filter(name => name.startsWith('B'))
console.log(Afruits)


let numbers = [ 4,9,16];
let doubledNumbers = numbers.map (Math.sqrt);
console.log(doubledNumbers);


let number = [1, 3, 5, 4, 2];
let firstEven = number.find(num => num % 2 === 0);
console.log(firstEven);

