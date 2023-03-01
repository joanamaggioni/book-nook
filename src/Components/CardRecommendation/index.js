import styled from "styled-components";
import { Title } from "../Title";

const Card = styled.div`
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  margin: 20px auto;
  max-width: 600px;
  padding: 25px 20px;
  justify-content: space-around;
  width: 100%;
`;

const Button = styled.button`
  background-color: #526b57;
  color: #fff;
  padding: 10px 0px;
  font-size: 16px;
  border: none;
  font-weight: 900;
  display: block;
  text-align: center;
  width: 150px;
  &:hover {
    cursor: pointer;
  }
`;

const Description = styled.p`
  max-width: 300px;
`;

const Caption = styled.h4`
  color: #002f52;
  font-size: 18px;
  font-weight: bold;
  margin: 15px 0;
`;

const ImgButton = styled.img`
  width: 150px;
`;

function CardRecommendation({ title, caption, description, img }) {
  return (
    <Card>
      <div>
        <Title tamanhoFonte="16px" cor="#EB9B00" alinhamento="left">
          {title}
        </Title>
        <Caption>{caption}</Caption>
        <Description>{description}</Description>
      </div>
      <div>
        <ImgButton src={img} />
        <Button>Saiba mais</Button>
      </div>
    </Card>
  );
}

export default CardRecommendation;
