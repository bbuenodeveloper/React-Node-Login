import { useEffect, useState } from "react"
import api from "../../services/api"

function ListarUsuarios() {

    const [allUsers, setAllUsers] = useState([])

    try{
    useEffect(() => {

        async function loadUsers() {

            const token = localStorage.getItem('token')
            const {data: {users} } = await api.get('/listar-usuarios', {
                
                headers:{ Authorization: `Bearer ${token}`}

            })
            
            setAllUsers(users)
        
        }


        loadUsers()

    
    }, [])
    } catch(err){
        alert('Não tem usuários listados')
    }




    return (
        <div className="border border-gray-300 shadow-md max-w-md m-auto mt-6 py-4 px-2">
            <h2 className="font-bold text-center text-blue-400 font-serif text-xl">Listar Usuários</h2>
            <ul className="p-4 flex flex-col gap-4">
                {allUsers.map(user => (
                  <li key={user.id} className="border border-gray-500 bg-gray-300 rounded-xl p-4">
                    <p>Id: {user.id}</p>
                    <p>Nome: {user.name}</p>
                    <p>Email: {user.email}</p>
                  </li>  
                ))}    
            </ul>

        </div>
    )
}










export default ListarUsuarios