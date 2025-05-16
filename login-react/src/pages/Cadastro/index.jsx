import { useRef } from "react"
import { Link } from "react-router-dom"
import api from "../../services/api"



function Cadastro() {

    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()

    async function handleSubmit(event) {
        event.preventDefault()

        try {

            await api.post('/cadastro', {
                name: nameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value
                
            })

            alert('Usuário cadastrado com sucesso')
            
        }catch (err) {
            alert('Erro ao cadastrar usuário')
        }
        
    }



    return (

        <div>
            <div className="border border-gray-300 shadow-md max-w-md m-auto mt-6 py-4 px-2">
                <h2 className="font-bold text-center text-blue-400 font-serif text-xl">Cadastro de Usuário</h2>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <input placeholder="Nome" ref={nameRef} type="text" name="name" className="m-2 px-2 border border-gray-300 rounded-md outline-none text-lg" />
                    <input placeholder="email" ref={emailRef} type="email" name="email" className="m-2 px-2 border border-gray-300 rounded-md outline-none text-lg" />
                    <input placeholder="senha" ref={passwordRef} type="password" name="passaword" className="m-2 px-2 border border-gray-300 rounded-md outline-none text-lg" />
                    <button className="border border-gray-300 rounded-full m-auto px-6 p-1 mt-5 mb-5 bg-blue-500 text-white font-serif text-lg
                 hover:bg-blue-700 cursor-pointer">Cadastrar</button>
                </form>
                <Link to="/login" className="text-center block text-blue-700">Já tem uma conta? Faça login</Link>
            </div>
        </div>
    )
}

export default Cadastro