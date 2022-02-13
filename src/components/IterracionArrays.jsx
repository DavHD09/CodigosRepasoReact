    import React from 'react'

export const IterracionArrays = () => {
    // Un array 
    const Frutas = ['Piña', 'Manzana', 'Pera', 'Mango'];
    // Un array de objetos
    const Personas = [
        {
            Id: 0,
            PrimerNombre: 'David',
            SegundoNombre: 'Daniel',
            PrimerApellido: 'Hernández',
            SegundoApellido: 'Molina',
            Edad: '22'
        },
        {
            Id: 1,
            PrimerNombre: 'Jose',
            SegundoNombre: 'Antonio',
            PrimerApellido: 'Hernández',
            SegundoApellido: 'Molina',
            Edad: '28'
        }
    ]
    return (

        <div>
            <h1> Recorriendo un array simple </h1>
            <ul>
                {Frutas.map(fruta => (
                    <li key={Math.random()}>{fruta}</li>
                ))}
            </ul>

            <br />

            <h1> Recorriendo un array de objetos</h1>
            <ul>
                {Personas.map(persona => (
                    <li key={persona.Id}>Hola mi nombre es: {persona.PrimerNombre} {persona.SegundoNombre} y mi apellido es: {persona.PrimerApellido} {persona.SegundoApellido} y tengo {persona.Edad} años </li>
                ))}
            </ul>
        </div>
    )
}






