import React, { PureComponent } from 'react';
import './footer.scss'

import { FaMailBulk } from "react-icons/fa";


class footer extends PureComponent{


    render(){
        return(
            <div className="footer">
                <div className="content">
                    <div>
                        <span>Pasantía </span>
                        <br></br>
                        <h5>SISTEMA PARA LA CONSULTA DE NORMAS</h5>
                        
                        <hr></hr>
                        <h6> PROYECTO CURRICULAR DE TECNOLOGÍA EN SISTEMATIZACIÓN DE DATOS</h6>
                    </div>
                    <div id="user">
                        <span>Desarrolló: </span>
                        <h5>Wendy Stefanny Ayala Muñoz</h5>
                        <h6 id="name"><FaMailBulk/>    wenn1897@gmail.com</h6>
                        <span>Estudiante Tecnologia en Sistematización de Datos</span>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default footer;