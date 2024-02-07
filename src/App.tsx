import "./App.css";
import { Todos } from "./components/Todos";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <h1>Vite + React + Recoil</h1>
      <Todos />
    </RecoilRoot>
  );
}

export default App;
