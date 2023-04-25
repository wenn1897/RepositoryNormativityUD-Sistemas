import React, { useState }  from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function NormaDetail(norma) {

    return (
        <tr className="">
                <th scope="row">{norma.num}</th>
                <td className="">{norma.tema}</td>
                <td className="">{norma.actor}</td>
                <td className="">{norma.inicio}</td>
                <td>
                    <Button variant="outline-secondary" onClick={()=>onEdit(norma.id)}>
                        <FaEdit />
                    </Button>
                </td>
            </tr> 
    )

}