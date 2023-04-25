import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { FaEdit } from "react-icons/fa";
import NormaDetail from '../pages/Normas/NormaDetail'
import axios from 'axios';
import './Normas.scss'

async function getNorma(param){
    //esta funcion me trae los datos de la base de datos
        
     const data  = await axios.get(`http://localhost:3000/normas/${param}`)
     const item = data.data;
     
    return item ;
}

export default function Norma(norma) {

    const [id, setId] = useState(0);
    const [data, setData] = useState(true);

    function onEdit(id){
        console.log("editando norma " + id)
        setId(id);
    }

    useEffect( ()=>{
        //console.log("executeUseEffect")
         const loadData = async (item)=> {
             item =  await getNorma(id);

             setData(item); 
             console.log("resultado useEffect:  " + JSON.stringify(item))
         }
         loadData();

      }, [id]);

    //   useEffect( ()=>{
    //      navigate("/normas/id");
    //    }, [data])


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
    // if(data){
    //     return (
            
    //         <tr className="">
    //             <th scope="row">{norma.num}</th>
    //             <td className="">{norma.tema}</td>
    //             <td className="">{norma.actor}</td>
    //             <td className="">{norma.inicio}</td>
    //             <td>
    //                 <Button variant="outline-secondary" onClick={()=>onEdit(norma.id)}>
    //                     <FaEdit />
    //                 </Button>
    //             </td>
    //         </tr>              
    //     )
    // }else{
    //     return(
    //         <NormaDetail norma={data}/>)
    // }  
    
    
}