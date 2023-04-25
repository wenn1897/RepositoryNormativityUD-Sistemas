import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import Norma from './Norma'

import './Normas.scss'

export default function NormaList(item) {

    const [acto, setActor] = useState('Estudiante')

    const data = item.item
    let NormaList;

    if(data) {
        NormaList = data.map( (norma)=>{

            return(
               <Norma key={norma.ID}
                      id={norma.ID}
                      num={norma.numero_norma} 
                      tema={norma.tema}
                      actor={acto}
                      inicio={norma.fecha_inicio}>
               </Norma> 
            )
        })
    } 

    return (
        <div className="container-normas">
            <Table striped bordered hover variant="normal">
                <thead>
                    <tr>
                        <th>Norma</th>
                        <th>Descripción</th>
                        <th>Actor</th>
                        <th>Vigencia</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                        {NormaList}
                </tbody>
            </Table>
        </div>
    )

}