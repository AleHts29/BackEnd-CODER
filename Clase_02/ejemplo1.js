// Realizaremos una función que reciba un objeto, y muestre cada dos segundos sus claves y valores en este formato: [clave, valor]. 

// El proceso no debe ser bloqueante. 

// Utilizaremos las nuevas funciones de ES8: entries, async await 

let  time = (ms)=> new Promise ((res, rej) => {
    setTimeout(() =>{
        res()
    }, ms)
})

async function prueba(){
    let obj1 = {
        nombre: 'Juan',
        edad: 35
    }

    for (let i = 0; i < 5; i++ ){
        await time(2000);
        console.log(Object.entries(obj1))
    }
}

prueba();
