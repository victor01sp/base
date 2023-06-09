import styleLogin from "../styles/styleLogin.js"
import App from "../App.js"
import srcApi from "../helpers/srcApi.js"
import { setData } from "../api/apiData.js"
import { validateEmail } from "../helpers/inputsLogin.js"

const Login =()=>{
    document.getElementById( 'root' ).innerHTML = `
        <main class="main" id="main" >
            <div class="div__kwxAo scrollbarY" >
                <form class="form__602XV" autocomplete="off" >
                    <div class="div__CfpYT" >
                        <span class="span__BThGf" >Email/Password incorrect</span>
                        <button type="button" class="button__QgKFK" id="btnCloseMessage" ><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    <h3 class="title__bZa1V" >Sign in</h3>
                    <label class="label__UHfty" for="ipt__cj8faa5" >
                        <span class="span__gpD3m" >email</span>
                        <input type="text" class="input__4ZO1I" value="" id="ipt__cj8faa5" name="email" title="" required>
                        <span class="span__0uBLC" ></span>
                    </label>
                    <label class="label__UHfty" for="ipt__6ZIXnqg" >
                        <span class="span__gpD3m" >password</span>
                        <input type="password" class="input__4ZO1I" value="" id="ipt__6ZIXnqg" name="password" title="" autocomplete="off" required>
                        <span class="span__0uBLC" ></span>
                    </label> 
                    <button type="submit" class="button__yv4SV" > login </button>

                    <div class="div__fst1a" >
                        <a href="#recover-password" class="a__HKzGO" >forgot password¿?</a>
                        <a href="#register" class="a__g1IdQ" >singup</a> 
                    </div>
                </form>
            </div>
        </main>` 

    const element = document.querySelector( '.form__602XV' )

    element.addEventListener( 'submit', (e)=>{
        e.preventDefault()

        localStorage.setItem( 'token', JSON.stringify( { id:'gvzoLMVHnrMcLpr', email:'agez.beetle@gmail.com' } ) )  
    })
}

export default Login


/*
    document.getElementById( 'styles' ).innerHTML = styleLogin() 
    document.getElementById( 'main' ).innerHTML = `
        <div class="div__kwxAo" >
            <form class="form__602XV" autocomplete="off" >
                <div class="div__CfpYT" >
                    <span class="span__BThGf" >Email/Password incorrect</span>
                    <button type="button" class="button__QgKFK" id="btnCloseMessage" ><i class="fa-solid fa-xmark"></i></button>
                </div>
                <h3 class="title__bZa1V" >Sign in</h3>
                <label class="label__UHfty" for="ipt__cj8faa5" >
                    <span class="span__gpD3m" >email</span>
                    <input type="text" class="input__4ZO1I" value="" id="ipt__cj8faa5" name="email" title="" required>
                    <span class="span__0uBLC" ></span>
                </label>
                <label class="label__UHfty" for="ipt__6ZIXnqg" >
                    <span class="span__gpD3m" >password</span>
                    <input type="password" class="input__4ZO1I" value="" id="ipt__6ZIXnqg" name="password" title="" autocomplete="off" required>
                    <span class="span__0uBLC" ></span>
                </label> 
                <button type="submit" class="button__yv4SV" > login </button>

                <div class="div__fst1a" >
                    <a href="#recover-password" class="a__HKzGO" >forgot password¿?</a>
                    <a href="#register" class="a__g1IdQ" >singup</a> 
                </div>
            </form>
        </div>
    `
 
    const message = document.querySelector( '.div__CfpYT' )
    const element = document.querySelector( '.form__602XV' )

    element.addEventListener( 'submit', (e)=>{
        e.preventDefault()

        const email     = validateEmail( element.email )

        if( email[0] === false ) return inputError( element.email, email[ 1 ] ) 
        if( element.password.value.length < 6 ) return inputError( element.password, 'constraseña al menos de 6 caracteres' )


        setData( new FormData( element ), srcApi( 'auth/login' ) )
        .then( resp => {
            if( resp ) return ( localStorage.setItem( 'token', resp ), App() )  
            message.classList.contains( 'message' ) ? ( message.classList.remove( 'error' ), setTimeout( ()=> message.classList.add( 'error' ) ) ) : message.classList.add( 'message' )
        })  
    })

    element.btnCloseMessage.addEventListener( 'click', ()=> message.classList = 'div__CfpYT' )

    element.addEventListener( 'input', (e)=>{ 
        if( e.target.classList.contains( 'error' ) ) (e.target.classList.remove( 'error' ), e.target.nextElementSibling.classList.remove( 'error' ) )
    })

    const inputError =( input, text )=>{
        const message = input.nextElementSibling
        message.classList.add( 'error' )
        message.textContent = text
        input.classList.remove( 'error' )
        setTimeout(()=> input.classList.add( 'error' ))
    }*/