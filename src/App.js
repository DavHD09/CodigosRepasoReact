import { IteracionPorKey } from "./components/IteracionPorKey";
import { IterracionArrays } from "./components/IterracionArrays";
import { Props } from "./components/Props";
import { Hooks } from "./components/Hooks";

function App() {
 
  return (
    <>
      <IterracionArrays/>
      <IteracionPorKey/>
      <Props Nombre={'David'} Apellido={'Hernández'} />
      <Hooks/>
    </>
  );
}

export default App;
