import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProducts } from "../../feature/reducer/Product/products";

import Header from "./Header";

import { CollectionContainer } from "./Styles";

const CustomerOrders = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getProducts({
        pathOne: "v3",
        pathTwo: "get-product-by-id",
        method: "get",
      })
    );
  }, [dispatch]);

  return (
    <CollectionContainer>
      {/* <MuiTable headCells={headCells} rows={products} /> */}
      <Header />
    </CollectionContainer>
  );
};

export default CustomerOrders;
