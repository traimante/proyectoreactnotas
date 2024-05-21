import { Component } from 'react'
import Contador from './componentes/contador';
import Formulario from  './componentes/Formulario';
import './App.css'

export default class App extends Component{
  constructor(props){
    super(props)
    this.state ={
      contadores : []
    }}

  guardarContador(nombre, numero){
    let nuevosContadores = this.state.contadores;
    let contador={
      nombre:nombre, numero:numero
    }
    nuevosContadores.push(contador);
    this.setState({contadores:nuevosContadores})
  }

  eliminarContador(index){
    let nuevosContadores = this.state.contadores;
    nuevosContadores.splice(index,1);
    this.setState({contadores:nuevosContadores})
  }
  render(){
    
    return(

      <div className='Contenedor'>
        <Formulario
        guardar={(nombre,numero) => this.guardarContador(nombre,numero)}
        />
        <h1></h1>
        <div className="Contadores">
          {this.state.contadores.map((contador,index) =>
          <Contador key={index} titulo={contador.nombre} eliminar={() => this.eliminarContador(index)}
          nuevoValor={contador.numero}
          />
          )}
        </div>
      </div>
    )
  }
}


