import React, { Component } from 'react';
import { Button , Table} from 'react-bootstrap';
import './Normas.scss'

export default function Norma(norma) {


    return (
                    <tr className="">
                        <th scope="row">{norma.num}</th>
                        <td className="">{norma.tema}</td>
                        <td className="">{norma.actor}</td>
                        <td className="">{norma.inicio}</td>
                        <td><Button>edit</Button></td>
                    </tr>
    )

}