import React, { useContext} from 'react'
import { ProffesorContext } from '../context/ProffesorContext'

export const ListaProfesores = () => {

    const {profesores} = useContext(ProffesorContext)

    return (
        <div>
            {profesores}
        </div>
    )
}
