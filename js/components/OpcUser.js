import App from "../App.js"
import srcApi from "../helpers/srcApi.js"
import { getData } from "../api/apiData.js"

import ModalElement from "../modal/ModalElement.js" 
 
const OpcUser =async()=>{

    const auth = JSON.parse( localStorage.getItem( 'token' ) )

    const [ element ] = ModalElement( 'div', { class : 'div__ZVwZr' },`

        ${ auth ? `
            <div class="div__bMGjU scrollbarY" >
                <a href="#setting" class="a__C854s" >
                    <i class="fa-solid fa-gear"></i>
                    <span class="span__ZXLa6" >configuracion</span>
                </a>
                <a href="#share" class="a__C854s" >
                    <i class="fa-solid fa-share-nodes"></i>
                    <span class="span__ZXLa6" >compartido</span>
                </a>
            </div>
        ` : '' }

        <div class="div__AG3Eu" >
            ${ auth ?
            `
                <a href="#user/${ auth.id }" class="a__TMrnX" > <span class="span__ZXLa6" > ${ auth.email } </span> </a>
                <button type="button" class="button__Tdzkh after" id="button__4UsXseIsqb" > <i class="fa-solid fa-right-from-bracket"></i> </button>
            ` 
            :
            `<a href="#login" class="a__Tdzkh" > <span class="span__ZXLa6" >login</span> </a> `
            }
             
        </div>
    `)

    element.addEventListener( 'click', e =>{
        if( e.target.id === 'button__4UsXseIsqb' ) return localStorage.clear()
    } ) 
    
}

export default OpcUser


//<a href="#user" class="a__C854s" > configuracion </a>

    /*<div class="div__bMGjU" >
            <a href="#list/share" class="a__C854s" > compartidos </a>
        </div>
        <div class="div__AG3Eu" >
            ${ auth ? `
                <a href="#user/${ auth.id }" class="a__Tdzkh" > ${ auth.email } </a>
                <button type="button" class="button__Tdzkh" id="button__4UsXseIsqb" > <i class="fa-solid fa-right-from-bracket"></i> </button>
            ` : `
                <a href="#user/login" class="a__Tdzkh" > login </a>
            `    
            }
        </div>*/