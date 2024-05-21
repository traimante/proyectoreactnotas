import { Component } from 'react'
import Boton from "./Boton"
export default class Formulario extends Component{
    constructor(props){
        super(props);
        this.state = {nombre:'', numero:''}
        
    }

render(){
    return(
        <div className='formulario'>
            <input type="text" placeholder='MATERIA'
            value={this.state.nombre}
            onChange={(e) => this.setState({nombre:e.target.value})}/>
            <input type="number" placeholder='NOTA'
            value={this.state.numero}
            onChange={(e) => this.setState({numero:parseInt(e.target.value)})}/>
            <Boton
            click={() => this.props.guardar(this.state.nombre, this.state.numero)}
            titulo={"Guardar"}
            />
        </div>
    )
}
}