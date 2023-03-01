import { books } from "./dataLastEdition";
import { Title } from "../Title";
import bookImage from "../../Img/book2.jpg";
import CardRecommendation from "../CardRecommendation";

import styled from "styled-components";

const LastEditionContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const NewBooksContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`;

const Img = styled.img`
  margin-top: 10px;
  margin-right: 25px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

function LastEdition() {
  return (
    <LastEditionContainer>
      <Title color="#000" fontSize="36px">
        - Gilmore's Favorite Books -
      </Title>

      <NewBooksContainer>
        {books.map((book) => (
          <Img src={book.src} />
        ))}
      </NewBooksContainer>

      <CardRecommendation
        title="Perhaps you are interested in..."
        caption="Balzac and the Little Chinese Seamstress"
        description="Balzac and the Little Chinese Seamstress is a semi-autobiographical novella written by Dai Sijie, and published in 2000 in French and in English in 2001. A film based on his novel directed by Dai was released in 2002."
        img={bookImage}
      />
    </LastEditionContainer>
  );
}

export default LastEdition;
