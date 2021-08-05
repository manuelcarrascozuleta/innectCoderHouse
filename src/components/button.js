export default function Button(props) {
    return (
      <button className="BotonMas" onClick={() => props.cuandohagoClick("hola soy el hijo")}>
        {props.text}
      </button>
    );
  }