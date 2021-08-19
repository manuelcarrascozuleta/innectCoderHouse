import React, {useState, useEffect} from "react";
import Detail from "./Detail"
import img1 from "./img1.png"



function ItemDetail (){
    const [productos, setProductos] = useState([])
    useEffect(() => {
        new Promise((resolve, reject) => {
            const data = [
                {
                    id: "1",
                    name: "Desarrollo",
                    price: 21313,
                    img1: <img src={img1} />
                    
                },
                
                
            ]
            setTimeout(() => resolve(data), 2000)
        }).then((dataResolve) => {
            setProductos(dataResolve)
        })
        .catch((error) => {
            console.log("error", error)
        })
    }, [])

    return(
        <>
            {productos.map((productos) => (
            <div><Detail prod={productos}></Detail></div>
            ))}
        </>
    )
}

export default ItemDetail;