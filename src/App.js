import { IteracionPorKey } from "./components/IteracionPorKey";
import { IterracionArrays } from "./components/IterracionArrays";
import { Props } from "./components/Props";
import { Hooks } from "./components/Hooks";
import { ListaUsuarios } from "./components/ListaUsuarios";
import {ListaProfesores} from './components/ListaProfesores'
import { ProffesorProvider } from "../src/context/ProffesorContext";
import { UserProvider } from '../src/context/UserContex'
function App() {

  return (
    <>
      <IterracionArrays />
      <IteracionPorKey />
      <Props Nombre={'David'} Apellido={'Hernández'} />
      <Hooks />

      <UserProvider>
        <ListaUsuarios />
      </UserProvider>

      <ProffesorProvider>
        <ListaProfesores/>
      </ProffesorProvider>

    </>
  );
}

export default App;
