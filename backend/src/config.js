import {config} from 'dotenv'
config(); //verifico si existe una variable de entorno: config() lee variables de entorno

console.log(process.env.NICKNAME);

export default{
    port: process.env.PORT || 3000,
}