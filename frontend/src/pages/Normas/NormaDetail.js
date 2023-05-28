import React, { PureComponent }  from 'react';
import { Button, Modal, Form, FormGroup } from 'react-bootstrap';
import {Input, InputGroup,InputGroupText,Label} from 'reactstrap'
import { CiHashtag } from "react-icons/ci";
import axios from 'axios';


async function UpdateNorma(param,object){
    //esta funcion me trae los datos de la base de datos

    const headers = {
        'Content-Type': 'application/json',
    };
     const data  = await axios.put(`http://localhost:3000/normas/${param}`, object, {headers})
     
     console.log("repuesta: " + JSON.stringify(data.status) )

    return data.status ;
}

class NormaDetail extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            view: true,
            id: 0,
            description: '',
            vigencia: '',
            success: false,
            error: false
        }
        this.handleClose = this.handleClose.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangeVigencia = this.handleChangeVigencia.bind(this);
    }

    handleClose(){
        this.props.changeView(false,0);     
    }

    handleChangeDescription(e){
        this.setState({
            description: e.target.value
        })
    }

    handleChangeVigencia(e){
        this.setState({
            vigencia: e.target.value
        })
    }

    async saveChanges(){
        const object = {
                "tema" : this.state.description,
                "fecFin": this.state.vigencia
        }

        const id = this.props.data.ID
        const res = await UpdateNorma(id,object)

        if(res == 200){
            console.log("update")
            this.setState({success: true})
            this.props.changeView(false,0);
            this.props.reloadSearch();
        }else{
            console.error("error")
            this.setState({error: true})
        }

        
    }

    render(){
        //console.log("recibiendooo: " + JSON.stringify(this.props.data))
        const item = this.props.data;
        return (
            <div 
                className="modal show"
                style={{ display: 'block', position: 'initial' }}>
                    <Modal.Dialog  size="lg" >
                        <Modal.Header>
                            <Modal.Title>Detalle</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <FormGroup>
                                    <Label><strong>No. Norma { item.numero_norma}</strong></Label>
                                    
                                    <br></br>
                                    <Label><strong>Descripción</strong></Label>
                                    <InputGroup>
                                            <InputGroupText>
                                                <CiHashtag />
                                            </InputGroupText>
                                        <Input placeholder="Descripción" value={this.state.description ? this.state.description : item.tema} onChange={(e)=>{this.handleChangeDescription(e)}}/>
                                    </InputGroup>
                                    <br></br>
                                    <Label><strong>Vigencia</strong></Label>
                                    <InputGroup>
                                            <InputGroupText>
                                                <CiHashtag />
                                            </InputGroupText>
                                        <Input placeholder="Fecha de caducidad" value={this.state.vigencia ? this.state.vigencia : item.fecha_final } onChange={(e)=>{this.handleChangeVigencia(e)}}/>
                                    </InputGroup>
                                </FormGroup>
                            </Form>         
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Volver
                            </Button>
                            <Button variant="primary"  onClick={this.saveChanges}>
                                Guardar Cambios
                            </Button>
                        </Modal.Footer> 
                    </Modal.Dialog>
                    {this.state.success ?
                        <div>Datos actualizados</div> : 
                        <div>aaa</div>     
                    }
                </div>
        )
    }
}

export default NormaDetail;