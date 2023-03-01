import perfil from "../../Img/perfil.svg";
import sacola from "../../Img/sacola.svg";
import styled from "styled-components";

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`;

const Icon = styled.ul`
  display: flex;
  align-items: center;
  margin-left: 600px;
`;
const icones = [perfil, sacola];

function Icons() {
  return (
    <Icon>
      {icones.map((icone) => (
        <Icone>
          <img src={icone}></img>
        </Icone>
      ))}
    </Icon>
  );
}

export default Icons;
