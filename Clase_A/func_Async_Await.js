let tiempo = (ms) => {
    setTimeout(()=>{
        console.log('Hola! soy un setTimeout en la funcion Tiempo.')
    }, ms)
}

function inicio(){
    tiempo(2000);
    console.log('Me ejecuto despues de la funcion tiempo')
}
inicio();
// Output
// "Me ejecuto despues de la funcion tiempo"
// "Hola! soy un setTimeout en la funcion Tiempo."


//  Esto se solucionaba antes con un callback.
// Ahora se pueude resolver con una promesa. 
// callback ----> promise ----> async/await 
let tiempo = (ms) => {
    
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('Hola! soy un setTimeout en una promesa.');
            resolve();
        }, ms)
    })
}

function inicio(){
    tiempo(2000).then( e => {
        console.log('Me ejecuto despues de la funcion tiempo con promesa.')
    })
}
inicio();
// Output
// "Hola! soy un setTimeout en una promesa."
// "Me ejecuto despues de la funcion tiempo con promesa."



// con async
let tiempo = (ms) => {
    
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('Soy un web Service.');
            resolve(5);
        }, ms)
    })
}

async function inicio(){
    let resultado = await tiempo (2000);
    console.log(resultado)
}
inicio();
// Output
// "Soy un web Service."
// 5


