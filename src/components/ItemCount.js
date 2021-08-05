import React, { useState, useEffect } from "react";
import Button from "./button"
import "./botones.css"

export default function ItemCount(props) {
  const [stock, initial] = useState(1);


  useEffect(() => {
    console.log("aca soy un componentDidMount", stock);
    return () => {
      console.log("esto lo voy a hacer cuando ya no este en el DOM");
    };
  }, [stock]);

  console.log("se esta renderizando", new Date());
  return (
    <React.Fragment>
      <h1>Item: {stock}</h1>
      {props.count2}
      <Button  text="+" cuandohagoClick={() => initial(stock + 1)} />
      <Button  text="-" cuandohagoClick={() => initial(stock - 1)} />
    </React.Fragment>
  );
}
