import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, makeStyles, IconButton, Button} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"


export default function ItemCount({stock, initial}) {
  const [count, setCount] = useState(1)


  function sumar(){
      if(count < stock){
          setCount (count + 1)
      }
  }
  
  function restar(){
      if(count > 1){
          setCount (count - 1)
      }
  }

  return(
      <>
      <h1>Items: {count}</h1>
      <Button color="primary" variant="contained" onClick={sumar}>+</Button>
      <Button color="secondary" variant="contained" onClick={restar}>-</Button>
      </>
  );
}









