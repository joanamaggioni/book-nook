import styled from "styled-components";

const Opcao = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5 px;
  cursor: pointer;
  min-width: 120px;
  margin-left: 10px;
`;
const Opcoes = styled.ul`
  display: flex;
`;
const textoOpcoes = ["CATEGORY", "FAVORITES", "MY COLLECTION", "OTHERS"];

function Options() {
  return (
    <Opcoes>
      {textoOpcoes.map((texto) => (
        <Opcao>
          <b>{texto}</b>
        </Opcao>
      ))}
    </Opcoes>
  );
}

export default Options;
