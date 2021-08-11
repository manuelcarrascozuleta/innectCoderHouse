import React, {useState, useEffect} from "react";
import Item from "./Item";

function ItemList (){
    const [products, setProducts] = useState([])

    useEffect(() => {
        new Promise((resolve, reject) => {
            const data = [
                {
                    id: "1",
                    name: "Desarrollo de Software",
                    price: 600
                },
                {
                    id: "2",
                    name: "Analsis de Datos",
                    price: 400
                },
                {
                    id: "3",
                    name: "Transformacion Digital",
                    price: 800
                   
                }
            ]
            setTimeout(() => resolve(data), 2000)
        }).then((dataResolve) => {
            setProducts(dataResolve)
        })
        .catch((error) => {
            console.log("error", error)
        })
    }, [])

    return(
        <>
            <h1>Servicios</h1>
            {products.map((productos) => (
            <div><Item prod={productos}></Item></div>
            ))}
        </>
    )
}

export default ItemList;
