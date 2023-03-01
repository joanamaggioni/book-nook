import Input from "../Input";
import { useState } from "react";
import { books } from "./dataSearch";

import styled from "styled-components";

const SearchContainer = styled.section`
  background-image: linear-gradient(90deg, #99c2a0 45%, #526b57 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 65vh;
  width: 100vw;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const Caption = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const Result = styled.div`
  margin: "0 0 0 0";
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  p {
    width: 200px;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;

function Search() {
  const [bookSearch, setBookSearch] = useState([]);

  console.log(bookSearch);
  return (
    <SearchContainer>
      <Title>Already know where to start?</Title>
      <Caption>Search below for one of the books from the Gilmore's</Caption>
      <Input
        placeholder="Search your new reading"
        onBlur={(e) => {
          const bookTyped = e.target.value;
          const resultSearch = books.filter((book) =>
            book.name.includes(bookTyped)
          );
          setBookSearch(resultSearch);
        }}
      />
      {bookSearch.map((book) => (
        <Result>
          <img src={book.src} />
          <p>{book.name}</p>
        </Result>
      ))}
    </SearchContainer>
  );
}

export default Search;
