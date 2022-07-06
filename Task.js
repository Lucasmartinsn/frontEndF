import React, { Component } from "react";
import api from "../Pessoas/api";
class Task extends Component{

    state={
        nomes:[],
    }

    async componentDidMount(){
        const response = await api.get('');

        this.setState({nomes: response.data});

    }

    render(){

        const {nomes} = this.state;
        
        return(
            <body>
                <div>
                    <h1>lucas</h1>
                    {console.log(nomes)}
                    {nomes.map(nome =>(
                     <li Key={nome.id_pessoa}>
                          <h2>
                            <strong>titulo</strong>
                            {nome.nome_pessoa}
                          </h2>                      
                     </li>   
                    ))}
                </div>
            </body>
        )
    }
}
export default Task;