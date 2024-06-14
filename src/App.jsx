import { Canvas } from "@react-three/fiber";
import { BasicScene } from "./components/BasicScene";

function App() {
  return (
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <BasicScene />
    </Canvas>
  );
}

export default App;
