import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
  align-content: center;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 300px;
  width: 27%;
  margin: 25px 3%;
  padding: 180px 0 0;
  position: relative;
  border-radius: 8px;
  box-shadow: 0px 0px 20px 3px rgba(0, 0, 0, 0.31);

  @media (max-width: 650px) {
    width: 80%;
  }

  @media (max-width: 400px) {
    width: 100%;
  }

  img {
    height: 150px;
    position: absolute;
    top: -15px;
    border-radius: 8px;
  }

  h2 {
    margin: 0;
  }

  .grey-thing {
    height: 4px;
    width: 45px;
    background: #eaeaea;
    border-radius: 4px 4px 8px 8px;
    margin: 15px 0px 15px 0px;
  }

  p {
    margin: 0;
    font-style: italic;
  }
`;

const ListingGrid = ({ itemsArray }) => {
  return (
    <Wrapper>
      {itemsArray.map((item) => {
        return (
          <Item>
            <img key={item.id} src={item.imageSrc} alt={item.name} />
            <Link to={`/items/${item.id}`}>
              <h2>{item.name}</h2>
            </Link>
            <div className="grey-thing"></div>
            <p>{item.latinName}</p>
          </Item>
        );
      })}
    </Wrapper>
  );
};

export default ListingGrid;
/*
map in curlies
map syntax
*/
