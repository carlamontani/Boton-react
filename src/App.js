import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        nombre: "Ada",
        apellido: "Lora"
      }
    };
  }

  clickEnBoton = () => {
    alert("hola mundo");
  };

  cambiarNombre() {
    //no
    //this.state.user.nombre ='Grace';
    //si
    this.setState({
      user: {
        nombre: "Loo",
        apellido: "Po",
        edad: 39
      }
    });
  }

  render() {
    return (
      <div>
        <h1>¡Hola, {this.state.user.nombre}! </h1>
        {/*< button onClick={this.clickEnBoton}>click</button>*/}
        <button onClick={() => this.cambiarNombre()}>click2</button>
      </div>
    );
  }
}

export default App;
