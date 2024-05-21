import { Component } from 'react'
import Boton from "./Boton";

export default class Contador extends Component{
  constructor(props){
    super(props)
    this.state ={
      valor: 0
    }
  }
  resta(){
    this.setState({valor:this.state.valor-1})
  }

  suma(){
    this.setState({valor:this.state.valor+1})
  }

  componentDidMount(){
    this.setState({valor:this.props.nuevoValor})
  }
  render(){
    return(
      <div className='Contador'>
        <h1>{this.props.titulo}</h1>
        <h2>{this.state.valor}</h2>
        <div className="Botonera">
          <Boton
          click={() => this.resta()} 
          titulo="-"/>
             <Boton
           click={() => this.props.eliminar()}
          titulo="x"/>
          <Boton
           click={() => this.suma()}
          titulo="+"/>
       
        </div>
      </div>
    )
  }
}