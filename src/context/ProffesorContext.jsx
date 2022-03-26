import React, {createContext, useState} from 'react'

export const ProffesorContext = createContext(); 

export const ProffesorProvider = ({children}) => {

    const [profesores, setProfesores] = useState('jose')
        
    return (
        <ProffesorContext.Provider value={{profesores,setProfesores}}>
            {children}
        </ProffesorContext.Provider>
    )

}