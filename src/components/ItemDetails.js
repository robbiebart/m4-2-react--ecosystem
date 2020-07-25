import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { items, sellers } from "../data";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  img {
    height: 100%;
    border-radius: 15px;
  }
  .img-div {
    max-height: 55vh;
    max-width: 45vw;
    margin: 50px 50px;
  }
`;

const Info = styled.div`
  max-height: 45vh;
  max-width: 45vw;
  margin: 50px 50px;

  .latin {
    font-style: italic;
    color: grey;
  }
  .description {
    margin: 25px 25px 25px 0px;
  }
`;

const BuyNow = styled.button`
  background-color: darkblue;
  color: white;
  border-radius: 10px;
  width: 300px;
  height: 60px;
  margin: 25px 25px 25px 0px;
  font-size: 25px;
`;

const SellerInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    height: 60px;
    border-radius: 25px;
    margin: 0px 5px 0px 0px;
  }

  h3 {
    font-weight: normal;
  }
`;

const ItemDetails = () => {
  const { itemId } = useParams();
  const currentItem = items[itemId];
  const currentSeller = currentItem.sellerId;
  const seller = sellers[currentSeller];
  const availability = (currentItem) => {
    if (currentItem.quantity === 0) {
      return <BuyNow>Out of stock</BuyNow>;
    } else {
      return <BuyNow>${currentItem.price} - Buy Now</BuyNow>;
    }
  };
  return (
    <Wrapper>
      <>{console.log("seller", seller.avatarSrc)}</>
      <img
        className="img-div"
        src={currentItem.imageSrc}
        alt={currentItem.name}
      />
      <Info>
        <h2>{currentItem.name}</h2>
        <p className="latin">{currentItem.latinName}</p>
        <p className="description">{currentItem.description}</p>
        <p>
          <em>
            Product of <strong>{currentItem.countryOfOrigin}</strong>
          </em>
        </p>
        <>{availability(currentItem)}</>
        <SellerInfo>
          <img src={seller.avatarSrc} alt={seller.id} />
          <h3>
            Sold by: <em>{seller.storeName}</em>
          </h3>
        </SellerInfo>
      </Info>
    </Wrapper>
  );
};

export default ItemDetails;
/*
currentitem 
{id: "a", name: "Avocado", latinName: "Persea americana", description: "An oddly creamy fruit. Surprisingly high in protei…it on toast, for reasons not entirely understood.", imageSrc: "/assets/avocado.jpg", …}
countryOfOrigin: "Mexico"
description: "An oddly creamy fruit. Surprisingly high in protein. Has a big pit in the middle.  You're not supposed to eat the rind. Millenials like to put it on toast, for reasons not entirely understood."
id: "a"
imageSrc: "/assets/avocado.jpg"
latinName: "Persea americana"
name: "Avocado"
price: 8
quantity: 2
sellerId: "alice"
__proto__: Object
*/
