import React from "react";
import ItemCount from './ItemCount'

function ItemListContainer(props){
    return (
        <>
        <ItemCount stock={5} initial={1} />
        </>
        )
}

export default ItemListContainer;