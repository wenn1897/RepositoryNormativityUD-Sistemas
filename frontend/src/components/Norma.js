import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FaEdit, FaLink } from "react-icons/fa";

import NormaDetail from '../pages/Normas/NormaDetail'
import axios from 'axios';
import './Normas.scss'
import { PureComponent } from "react";


async function getNorma(param){
    //esta funcion me trae los datos de la base de datos
     const data  = await axios.get(`http://localhost:3000/normas/${param}`)
     const item = data.data;

    return item ;
}

class Norma extends PureComponent{

    constructor(props) {
        super(props);
        this.detailRef = React.createRef();

        this.state = {
            id: 0,
            data: {},
            edit: false,
            update: '',
            url: ''   
        }
        this.onEdit = this.onEdit.bind(this);
    }

    async onEdit(id){
           //console.log("realizando peticion")
           const item = await getNorma(id) ;
           if(item){
                this.setState({data: item})
           } 
            //console.log("realizando peticion" + JSON.stringify(item))
            this.props.changeView(true,id)
    }

    async openUrl(url){
        // const item = await getNorma(id) ;
        //    if(item){
        //         this.setState({url: item.enlace})
        //    } 
            console.log("enlace" + JSON.stringify(url))
    }

    render(){
        
        //console.log("data:" + JSON.stringify(this.data))
        return (
            
            <tr className="">
                <th scope="row">{this.props.num}</th>
                <td className="">{this.props.tema}</td>
                <td className="">{this.props.actor}</td>
                <td className="">{this.props.inicio}</td>
                <td className="">{this.props.final}</td>
                <td>
                    <Button variant="outline-secondary" onClick={() => {this.onEdit(this.props.id)}}>
                        <FaEdit />
                    </Button>
                </td>
                <td>
                    <Button variant="outline-secondary" onClick={() => {this.openUrl(this.props.url)}}>
                        <a href={this.props.url} target="_blank"><FaLink/></a>
                    </Button>    
                </td> 
            </tr>                  
        )
    }
}

 export default Norma;