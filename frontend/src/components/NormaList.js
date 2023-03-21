import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Norma from './Norma'

import './Normas.scss'


export default function NormaList(item) {

    
    const [data, setdata] = useState(item.item)
    let NormaList;

    if(data) {
        console.log("esta es la data" + JSON.stringify(data))
        NormaList = data.map( (norma)=>{
            return(
               <Norma key={norma.id}
                      num={norma.numero_norma} 
                      tema={norma.tema}
                      actor={norma.actor}
                      inicio={norma.fecha_inicio}>
               </Norma> 
            )
        })
    } 

    return (
        <div className="container-normas">
            <Table striped bordered hover>
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