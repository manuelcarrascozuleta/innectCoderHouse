import React from "react";
import ItemCount from './ItemCount'
import ItemList from "./ItemList";


function ItemListContainer(props){
    return (
        <>
        <ItemCount stock={5} initial={1} />
        <ItemList />
        </>
        )
}

export default ItemListContainer;