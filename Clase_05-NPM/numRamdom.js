// A- Crear un proyecto en node.js que genere 10000 números aleatorios en el rango  de 1 a 20.
// B- Crear un objeto cuyas claves sean los números salidos y el valor asociado a cada clave será la cantidad de veces que salió dicho número. Representar por consola los resultados


// Seteo de parametros
const amount = 50
const minRango = 1
const maxRango = 20

// Generador de numeros aleatorios en un determinado rango
numRandom = (min, max) =>{
    return  Math.floor((Math.random()*((max+1)-min))+min)
}

// Filtra los key repetidos y genera un array de objetos final
filterKeyObject = (array) =>{
let auxArray = []
let counter = 0
    for (let i = 0; i < array.length-1; i++){
        for (let j = i+1; j < array.length; j++){
        
            let a = (Object.keys(array[i]))[0]
            let b = (Object.keys(array[j]))[0]
            
            // console.log(a[0]==b[0])

            if(a == b){
                // console.log('Clave igual')
                console.log(a)
                counter++
                
                array.splice(j,1)
                auxArray = [...array]
            }
            // console.log(i)
        }
    }
    if (auxArray.length <= maxRango){
        console.log(counter) 
        return auxArray
    }else{
        filterKeyObject(auxArray)
    }
}

buscarRepetidos = (array) => {
const auxArray = []
let counter = 1;
    for(let i = 0; i < array.length; i++){
        for(let j = i+1; j <= array.length; j++){
            if(array[i] == array[j]){
                array.splice(j,1)
                counter++;
            }
            // console.log('j: '+j)
        }
        const newObj = new Object
        newObj[array[i]] = counter
        auxArray.push(newObj)
        counter = 1 
        // console.log('i: '+i)     
    }
    
    const arrayFilteredOut = filterKeyObject(auxArray)
    if (arrayFilteredOut.length == 0){
        console.log('Vacio')
        return auxArray
    }
    return arrayFilteredOut;
}
    


const arr = [];
// Creo un array de un determinado numero de elementos
for( let i= 1; i <= amount; i++){
   let num = numRandom(minRango, maxRango)
    arr.push(num) 
}
console.log(arr)

const arrayObject = buscarRepetidos(arr)

// console.log(`Cantidad de repeticiones: ${JSON.stringify(arrayObject)}`)
console.log(arrayObject)
console.log(arrayObject.length)
