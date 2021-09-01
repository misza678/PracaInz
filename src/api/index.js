import axios from 'axios';


const Base_url ='https://localhost:44395/api/';
  export  const ENDPOINTS={
        CONSOLES:'CONSOLES',
        CONTROLLERS:'CONTROLLERS',
        ORDER   :'CONSOLES',
        CONSOLESDEFECT:'CONSOLESDEFECT',
        CONTROLLERSDEFECT:'CONTROLLERSDEFECT',
        MainProduct:'MainProductsToViews',
        ProductsToViews:'ProductsToViews',
        Defects:'Defects',
        Shipping:'ShippingMetods'
    }

export const createApiEndpoint=endpoint=>{
    
let url=Base_url+endpoint+'/';

    return{
        fetchAll:()=> axios.get(url),
        fetchById:id=>axios.get(url +id),
        create:newRecord=>axios.post(url.newRecord),
        update:(id,updatedRecord)=>axios.put(url+id,updatedRecord),
        delete:id=>axios.delete(url+id)
    }
}