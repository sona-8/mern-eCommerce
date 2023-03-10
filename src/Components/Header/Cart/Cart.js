import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCartItems } from "../../../feature/reducer/addToCart";
import { useAddToCart } from "../../../hooks/useAddToCart";
import { callApi, shortText } from "../../../utils";
import Quantity from "../../Shared/Quantity";

import {
  CartWrapper,
  Img,
  ImgWrapper,
  Left,
  Name,
  Price,
  Middle,
  Right,
  Close,
} from "./Styles";
import DeleteIcon from "@mui/icons-material/Delete";
import { tostify } from "../../../utils/toastify";
const Cart = ({ cart }) => {
  const [product, setProduct] = useState(null);
  const [variation, setVariation] = useState(null);

  const { defaultImg } = useSelector((state) => state.cart);

  const { removeCart } = useAddToCart();

  const dispatch = useDispatch();

  const removeHandler = (id) => {
    if (variation) {
      const carts = removeCart({ _id: cart.product_id });
      dispatch(addCartItems(carts));
      tostify("Remove One Item", "error");
    }
  };

  // Get product variation
  useEffect(() => {
    (async () => {
      const res = await callApi({
        pathOne: "v1",
        pathTwo: "getvariations",
        _id: cart.product_id,
        method: "get",
      });

      if (res.variants) {
        setVariation(res.variants);
      }
    })();
  }, [cart]);

  // get product by id
  useEffect(() => {
    (async () => {
      const res = await callApi({
        pathOne: "v1",
        pathTwo: "getproduct",
        _id: cart.product_id,
        method: "get",
      });

      if (res.product) {
        setProduct(res.product);
      }
    })();
  }, [cart]);

  return (
    <CartWrapper>
      <Left>
        <Link to={`/product/${product?._id}`}>
          <ImgWrapper>
            {variation ? (
              <Img src={variation.variation_img} alt="img" />
            ) : (
              <Img src={defaultImg} alt="image" />
            )}
          </ImgWrapper>
        </Link>
      </Left>
      <Middle>
        <Link to={`/product/${product?._id}`}>
          {product && <Name>{shortText(product.name, 40, 0, 40)} </Name>}
        </Link>

        <Quantity cart={cart} />
        <Price>
          ${parseFloat(cart.price).toFixed(2)} X {cart.qty}
        </Price>
      </Middle>
      <Right>
        <Close onClick={() => removeHandler(cart.product_id)}>
          <DeleteIcon fontSize="medium" color="error" />
        </Close>
      </Right>
    </CartWrapper>
  );
};

export default Cart;
