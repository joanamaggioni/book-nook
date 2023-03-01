import Header from "./Components/Header";
import Search from "./Components/Search";
import LastEdition from "./Components/LastEdition";

import styled from "styled-components";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #99c2a0 45%, #526b57 165%);
`;
function App() {
  return (
    <AppContainer>
      <Header />
      <Search />
      <LastEdition />
    </AppContainer>
  );
}

export default App;
