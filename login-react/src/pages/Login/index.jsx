import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import api from "../../services/api"



function Login() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault()

        try {
            //data dentro dos bigoinhos significa que quero pegar oq esta dentro de data e :token que estou renomeando para token a variavel
           const { data:token } = await api.post('/login', {
                email: emailRef.current.value,
                password: passwordRef.current.value

            })

            localStorage.setItem('token', token)    
           
            navigate('/listar-usuarios')

        } catch (err) {
            alert('Senha ou email incorretos')
        }

    }



    return (

        <div>
            <div className="border border-gray-300 shadow-md max-w-md m-auto mt-6 py-4 px-2">
                <h2 className="font-bold text-center text-blue-400 font-serif text-xl">Login de Usuário</h2>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <input placeholder="email" ref={emailRef} type="email" name="email" className="m-2 px-2 border border-gray-300 rounded-md outline-none text-lg" />
                    <input placeholder="senha" ref={passwordRef} type="password" name="passaword" className="m-2 px-2 border border-gray-300 rounded-md outline-none text-lg" />
                    <button className="border border-gray-300 rounded-full m-auto px-6 p-1 mt-5 mb-5 bg-blue-500 text-white font-serif text-lg
                 hover:bg-blue-700 cursor-pointer">Entrar</button>
                </form>
                <Link to="/" className="text-center block text-blue-700">Não tem conta? Cadastre-se</Link>
            </div>
        </div>
    )
}

export default Login