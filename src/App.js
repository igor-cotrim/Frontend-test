import { Header } from "./components/Header";
import { MainSection } from "./components/MainSection";
import { SimulationSection } from "./components/SimulationSection";

import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <Header/>
      <MainSection/>
      <GlobalStyle/>
      <SimulationSection/>
    </>
  );
}

export default App;
