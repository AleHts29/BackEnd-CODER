let arr = [1, 2, 3, 4];
console.log(arr.includes(2, 3)) // Devuelve false ("valor a buscar", "posicion")

let arr1 = ["1**2", 2, "3**3", "**", 4];
function a1 (arr){
    if(arr.includes('**', 0)){
    console.log('Si contiene **')
    }
    else
        console.log('No contiene **')
}
a1(arr1);
