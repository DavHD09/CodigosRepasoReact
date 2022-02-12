export const IteracionPorKey = () => {

  // un objeto
  const animal = {
      nombre: 'Coco',
      especie: 'delfin',
      edad: 5,
      acuario: 'Valencia',
      adiestrador: 'Marcelo'
  }

  // Recoja las llaves de Animal (llave:Valor)
  const Key = Object.keys(animal);

  return (
    <div>

    <h1> Recorriendo las llaves de animal con su valor </h1>
    <ul>
        {Key.map(k=>(
            <li>{k}: {animal[k]}</li>
        ))}
    </ul>

    </div>
  )
}
