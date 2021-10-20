// Estas funciones reciben los mismos parametros que su version sincrona y se encarga internamente de abrir/cerrar el archivo una vez finalizado su uso.


const fs = require('fs')

let datos = [
    {
        id: 1,
        name: 'Camilo',
        password: '123456'
    },
    {
        id: 2,
        name: 'Juan',
        password: '123456'
    },
    {
        id: 3,
        name: 'Pedro',
        password: '123456'
    }
]



const getInfo = () => {
    return new Promise((resolve, reject)=>{
        if(datos.length === 0){
            reject("ERROR: Dado no resueltos")
        }
        setTimeout(()=>{
            resolve(datos)
        }, 3000)
        
    })
}

getInfo().then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})


// Leo/creo el archivo usando then/catch
function leerTC(){
    fs.promises.readFile('./test.txt', {encoding:'utf-8'})
    .then(contenido => {
        console.log(contenido)
    })
    .catch(err => {
        console.log('Error de lectura!', err)
    })
}
leerTC()



// Leo/creo el archivo usando async/await
async function leerAA(){
    try{
        const  contenido = JSON.parse(await fs.promises.readFile('./test2.json', {encoding:'utf-8'}))
        
        // Modifica el autor
        const newModificacion = modificar(contenido)

        // creo un nuevo archivo .json con los datos modificados
        creoNewArchivo_AA(newModificacion)

    }
    catch (err){
        throw new Error('Error de lectura!')
    }
}
leerAA()


modificar = (contenido) => {
    console.log(contenido)
    const newContent = contenido
        newContent[0].Libro = 'Juegos del Hambre'
        newContent[0].Autor = 'Veronica R'
    return newContent;
}


// creo el archivo usando async/await
async function creoNewArchivo_AA(newModificacion){
    try{       
       const contenido =  await fs.promises.writeFile('./newDatos.json', JSON.stringify(newModificacion, null, 2), {encoding:'utf-8'})

    }
    catch (err){
        throw new Error('Error de lectura!')
    }
}
