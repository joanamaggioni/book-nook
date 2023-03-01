import Icons from "../Icons";
import Logo from "../Logo";
import Options from "../Options";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <Options />
      <Icons />
    </HeaderContainer>
  );
}

export default Header;
