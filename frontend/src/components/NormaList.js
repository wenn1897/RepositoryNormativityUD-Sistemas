import React, {PureComponent} from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

import Norma from './Norma'
import NormaDetail from '../pages/Normas/NormaDetail'
import './Normas.scss'

async function getInformation(id){
    //esta funcion me trae los datos de la base de datos
     const data  = await axios.get(`http://localhost:3000/normas/${id}`)
     const item = data.data;

     
    return item ;
}

class NormaList extends PureComponent {

    constructor(props) {
        super(props);
        this.detailRef = React.createRef();

        this.state = {
            view: false,
            data:  this.props.item,
            normaList: '',
            id: 0,
            item: {}
        }
        this.changeView = this.changeView.bind(this);
        this.defineActor = this.defineActor.bind(this);
        this.reloadSearch = this.reloadSearch.bind(this);
    }

    componentDidMount(){
        console.log("didMount Normalist")
        console.log(this.props.item)
        console.log(this.state.data)
    }

    async changeView(value,id){
        this.setState({view: value}); 
        const item = await getInformation(id)
        //console.log("peticion: " + JSON.stringify(item))
        this.setState({item:item})
    }

    reloadSearch(){
        console.log('reload en norma list')
        this.props.reload();
    }

    defineActor(act){
        var actor = act.split(" ");
        var cadena = ''

        if(actor[0]==1){
            cadena = 'Estudiante'
        }if(actor[0]==2){
            cadena = ' Docente'
        }if(actor[0]==3){
            cadena = ' Administrativo'
        }if(actor[1]==2){
            cadena+=   ' Docente'
        }if(actor[1]==3){
            cadena+= ' Administrativo'
        }if(actor[2]==3){
            cadena+=  ' Administrativo'
        }
         return cadena
    }
    
     render(){
        
        if(this.state.data) {
            this.normaList = this.state.data.map( (norma)=>{
                return(
                   <Norma key={norma.ID}
                          id={norma.ID}
                          num={norma.numero_norma} 
                          tema={norma.tema}
                          actor={this.defineActor(norma.actor)}
                          inicio={norma.fecha_inicio}
                          final={norma.fecha_final}
                          url={norma.enlace}
                          changeView= {this.changeView}
                    >
                   </Norma> 
                )
            })
        } 


        return(
            <div className="container-normas">
            {this.state.view ? <NormaDetail changeView= {this.changeView}  data={this.state.item} reloadSearch={this.reloadSearch}/> : 
                    <Table striped bordered hover variant="normal">
                        <thead>
                            <tr>
                                <th>Norma</th>
                                <th>Descripción</th>
                                <th>Actor</th>
                                <th>Inicio</th>
                                <th>Fin vigencia</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                                {this.normaList}
                        </tbody>
                    </Table>
            }
        </div>
        )
    } 
}

export default NormaList;
    
//  export default function NormaList(item){

//     const [acto, setActor] = useState('Estudiante')
//     const [view, setView] = useState(true);
//     const [show, setShow] = useState(false);


//     const data = item.item
//     let NormaList; 

//     function sendID(value){
//         setView(value)
//         //setUpdate(data);
//         console.log("view: " + view)
//     }

//     // useImperativeHandle(normasRef, ()=> {  
//     //      return sendID
//     //  })


//     if(data) {
//         NormaList = data.map( (norma)=>{

//             return(
//                <Norma key={norma.ID}
//                       id={norma.ID}
//                       num={norma.numero_norma} 
//                       tema={norma.tema}
//                       actor={acto}
//                       inicio={norma.fecha_inicio}
//                       onChange={sendID}>
//                </Norma> 
//             )
//         })
//     } 

//     //  useEffect( ()=>{
//     //     if(show != view){
//     //         setView(show)
//     //     }
//     // }, [show])

//     return (
        

//         <div className="container-normas">
            
//             {view ? <NormaDetail onChange={sendID} /> : 
//                     <Table striped bordered hover variant="normal">
//                         <thead>
//                             <tr>
//                                 <th>Norma</th>
//                                 <th>Descripción</th>
//                                 <th>Actor</th>
//                                 <th>Vigencia</th>
//                                 <th></th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                                 {NormaList}
//                         </tbody>
//                     </Table>
//             }
//         </div>
//     )

// }

