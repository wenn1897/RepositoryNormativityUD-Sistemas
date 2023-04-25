import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './search.scss'
import Logo from '../../assets/logoU.png'
import { FaSistrix } from "react-icons/fa";


import { Button , Table} from 'react-bootstrap';

import NormaList from '../../components/NormaList'

async function getInformation(param){
    //esta funcion me trae los datos de la base de datos
    
     const word= '%' + param + '%'
     const data  = await axios.post('http://localhost:3000/search', {name: word})
     const item = data.data;
     
    return item ;
}


export default function Search() {

    const [result, setResult] = useState(null)
    const [view, setView] = useState(false)
    const [find, setFind] = useState(true)
    const [word, setWord] = useState('')

     useEffect( ()=>{
        const loadData = async (itemNorma)=> {
            itemNorma =  await getInformation(word);

            setResult(itemNorma); 
            setView(true); 
            
            console.log(itemNorma)
            //console.log("resultado useEffect:  " + JSON.stringify(result))
        }
        loadData();

     }, [find]
     );

     function handleChange(value){
        setWord(value);
     }

     function onSearch(){
        setFind(!find);
     }

        return (
            <div className="fondo">
                {console.log("renderizando componente")}
                <div className="container-header">
                    <div className="div-image">
                        <img src={Logo} alt="logo universidad francisco jose de caldas"></img>
                    </div>
                    <div className="input-word" >
                        <input type="text"  
                                placeholder='Escribe aquí...' 
                                className="inputSearch"
                                onChange={(e)=>handleChange(e.target.value)}
                                value= {word} />
                    </div>
                    <div className="btnSearch">
                        <form >
                            <Button variant="light" onClick={()=>onSearch()}><FaSistrix /> Buscar</Button>
                        </form>
                    </div>
                </div>
                { view ? <div className="div-body"><NormaList item={result}/></div> : <div className="loading">Loading...</div>}
            </div>
        )
        
     
    

}

