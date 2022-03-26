import React, { createContext, useState } from 'react';

export const UserContex = createContext()

export const UserProvider = ({ children }) => {

    const ListUsuarios = [
        {
            nombre: 'david',
            apellido: ' hernadnez',
            edad: 22,
            profesion: 'desarrollador'
        },
        {
            nombre: 'jose',
            apellido: ' hernadnez',
            edad: 28,
            profesion: 'teleco'
        },
    ]

    const [users, setUsers] = useState(ListUsuarios)

    return (
        <UserContex.Provider value={{ users, setUsers }}>
            {children}
        </UserContex.Provider >
    )

}

