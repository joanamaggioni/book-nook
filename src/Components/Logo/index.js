import logo from "../../Img/logo.png";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
  margin-right: 300px;
`;

const LogoImg = styled.img`
  margin-right: 10px;
  max-width: 200px;
  max-height: 120px;
  width: auto;
  height: auto;
`;

function Logo() {
  return (
    <LogoContainer>
      <LogoImg src={logo} alt="logo" className="logo-img"></LogoImg>
      <p>
        <strong>
          Book
          <br />
          Nook
        </strong>
      </p>
    </LogoContainer>
  );
}

export default Logo;
