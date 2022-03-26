import React, { useContext } from 'react'
import { UserContex } from '../context/UserContex'

export const ListaUsuarios = () => {

    const { users, setUsers } = useContext(UserContex)

    const usuarios2 = [
        {
            nombre: 'Glitza',
            apellido: ' hernadnez',
            edad: 20,
            profesion: 'ingenieria'
        },
        {
            nombre: 'Francisco',
            apellido: ' hernadnez',
            edad: 35,
            profesion: 'administrador'
        }
    ]

    return (
        <div>
            <h1> Hola desde el componente de lista de usuarios </h1>
            <button onClick={()=>setUsers(usuarios2)}> Cambiar de usuarios </button>
            <ul>
                {users.map(user => (
                    <li key={user.edad}> Hola mi nombre es: {user.nombre}, tengo {user.edad} años y soy: {user.profesion} </li>
                ))}
            </ul>
            
            
        </div>
        
    )
}
