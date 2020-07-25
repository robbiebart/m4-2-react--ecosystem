import React from "react";
import styled from "styled-components";
import { items } from "../data";
import ListingGrid from "./ListingGrid";

const Home = (props) => {
  const itemsArray = Object.values(items);
  return (
    <>
      <p>Fruit emporium sells the finest fruits from this world and beyond</p>
      <p>Browse items:</p>
      <ListingGrid itemsArray={itemsArray}></ListingGrid>
    </>
  );
};

export default Home;
