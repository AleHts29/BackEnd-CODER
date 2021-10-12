
const arr = [1, 2, 'hola'];
const arr2 = [];


// 1
function showList(list){
    if(!list.length){
        console.log('Lista vacia');
        return
    }

    const listaContent = list.reduce(function(previous, current){
        return `${previous} ${current}`
    })
    console.log(listaContent)
}

showList(arr)



// // 2
// function (list){
//     if(!list.length){
//         console.log('Lista vacia');
//         return
//     }

//     const listaContent = list.reduce(function(previous, current){
//         return `${previous} ${current}`
//     })
//     console.log(listaContent)
// }(arr);


// // 3
// function createMultiplier(multiplier){
//     return (multiplicand) => multiplicand * multiplier
// }

// const duplicate = createMultiplier