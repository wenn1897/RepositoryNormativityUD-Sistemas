import React, { PureComponent } from 'react';
import axios from 'axios';
import './search.scss'
import Logo from '../../assets/logoU.png'
import { FaSistrix } from "react-icons/fa";
import { Button , Table} from 'react-bootstrap';

import NormaList from '../../components/NormaList';
import Footer from '../../components/footer/footer'

async function getInformation(param){
    //esta funcion me trae los datos de la base de datos
    
     const word= '%' + param + '%'
     const data  = await axios.post('http://localhost:3000/search', {name: word})
     const item = data.data;

     console.log("holandas" + JSON.stringify(item))
     
    return item ;
}

class Search extends PureComponent{
    constructor(props) {
        super(props);
        this.listaRef= React.createRef()
        this.state = {
            result: null,
            view: false,
            find: true,
            word: '', 
            flag: false  
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.loadData = this.loadData.bind(this);
        this.update = this.update.bind(this);
        this.reload = this.reload.bind(this);
    }

    componentDidMount(){
        this.update()
        this.setState({view:true})
    }

    reload(){
        console.log('reload en search')
        this.setState({view: true})
    }

    async update(){
        const itemNorma =  await getInformation(this.state.word);
        this.listaRef.current.setState({ data: itemNorma })
    }

    loadData = async ()=> {
            const itemNorma =  await getInformation(this.state.word);
            if(itemNorma){   
                this.listaRef.current.setState({ data: itemNorma })
            }
            this.setState({view:true}) 
        
    }

    handleChange(e){
        this.setState({word: e.target.value});
    }

    onSearch(){
        this.setState({view: true});
        this.loadData()
    }

    render(){
        return ( 
            <div className="fondo">
                {console.log("rendedrizando search")}
                <div className="container-header">
                    <div className="div-image">
                        <img src={Logo} alt="logo universidad francisco jose de caldas"></img>
                    </div>
                    <div className="input-word" >
                        <input type="text"  
                                placeholder='Escribe aquí...' 
                                className="inputSearch"
                                onChange={(e)=>{this.handleChange(e)}}
                                value= {this.state.word} />
                    </div>
                    <div className="btnSearch">
                        <form >
                            <Button variant="light" onClick={()=>this.onSearch()}><FaSistrix /> Buscar</Button>
                        </form>
                    </div>
                </div>
                { this.state.view ? 
                    <div className="div-body"><NormaList item={this.state.result} ref={this.listaRef} reload={this.reload}/>
                </div> : <div className="loading">Loading...</div>}
                <Footer/>
            </div>
        )
    }
}

export default Search;
