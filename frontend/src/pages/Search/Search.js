import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './search.scss'
import Logo from '../../assets/logoU.png'
import { Button , Table} from 'react-bootstrap';

import NormaList from '../../components/NormaList'

async function getInformation(param){
    //esta funcion me trae los datos de mi base de datos
    console.log("realizando peticion")
     const data  = await axios.post('http://localhost:3000/search', {name: param})
     const item = data.data.recordset;
        console.log(JSON.stringify(item));
    return item ;
}




export default function Search() {

    const [result, setResult] = useState()
    const [view, setView] = useState(false)
    const [find, setFind] = useState(false)
    const [word, setWord] = useState()
    const navigate = useNavigate()

     useEffect(
        async (itemNorma)=> {
            //console.log("ejecutando useEffect")
            itemNorma =  await getInformation("%docente%");
            setResult(itemNorma); 
            setView(!view);
            //console.log("palabra buscada: " + word)
            
            //console.log(JSON.stringify(result))
        }, []
     );

        return (
            <div className="">
    
                <div className="container-header">
                    <div className="div-image">
                        <img src={Logo} alt="logo universidad francisco jose de caldas"></img>
                    </div>
                    <div className="input-word" >
                        <input type="text"  
                                placeholder='Escribe aquí...' 
                                className="inputSearch"
                                onChange={()=> setWord(word)}
                                value= {word} />
                    </div>
                    <div className="btnSearch">
                        <Button variant="light" onClick={()=> setFind(!find)}><i className="fa fa-search"></i>Buscar</Button>
                    </div>
                </div>
                { view ? <NormaList item={result}/> :  <div className="loading">Loading...</div>}
            </div>
        )
        
     
    

}

