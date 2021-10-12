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
            reject("ERROR: Dadot no resueltos")
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
