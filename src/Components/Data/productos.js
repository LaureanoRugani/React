const Data = [
    {
        "id": 0,
        "nombre": "Viaje a Amsterdam",
        "precio": 2500,
        "stock": 10,
        "imagen": ""

    },

    {
        "id": 1,
        "nombre": "Viaje a Roma",
        "precio": 2000,
        "stock": 13,
        "imagen": ""

    }
]




const getFetch = new Promise ((resolve, reject)=>{
    let condition=true
    condition ? setTimeout(()=>{resolve(Data)}, 2000) : reject(console.log("error en base de datos"))
})

export default getFetch;