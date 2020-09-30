import {MikroORM} from "@mikro-orm/core"
import { ___prod___ } from "./constants";

const main = async ()=>{
    const orm = await MikroORM.init({
        entities:[],
        dbName: 'reddit-project',
        user: 'postgres',
        password: '123456',
        debug: !___prod___,
        type: 'postgresql'
    })
}

console.log("hellooooooo");
