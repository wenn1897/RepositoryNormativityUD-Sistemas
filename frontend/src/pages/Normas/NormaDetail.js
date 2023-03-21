import React, { useState }  from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function NormaDetail() {

    const navigate = useNavigate()
    return (
        <div className="container">

            <h2 className=""> aqui va una norma con su detalle o no ?</h2>
        </div>
    )

}