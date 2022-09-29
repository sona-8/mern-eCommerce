import { useSelector, useDispatch } from "react-redux";

import {
  AddItem,
  Button,
  CartMain,
  ItemEmpty,
  ItemEmptyIcon,
  ItemEmptyText,
  ShoppingUpdate,
  Wrapper,
} from "./Styles";
import { Col, Container, Row } from "../../Styles/Gride";

import Layout from "../Layout";

// React Icon
import { AiOutlineHeart } from "react-icons/ai";

import { clearCart } from "../../feature/reducer/wishList";

import BreadCrumb from "../../Components/Shared/Components/BreadCrumb";

import Tabel from "../../Components/Shared/Components/Tabel/Table";

const Wishlist = () => {
  const { lists } = useSelector((state) => state.wishList);

  const dispatch = useDispatch();

  const cleareCartItems = () => {
    dispatch(clearCart());
  };

  return (
    <Layout>
      <Wrapper>
        <BreadCrumb pathName="wishlist" />
        <CartMain>
          {/* If Wishlist is empty! */}
          {lists.items.length === 0 && (
            <ItemEmpty>
              <ItemEmptyIcon>
                <AiOutlineHeart />
              </ItemEmptyIcon>
              <ItemEmptyText>No items found in wishlist</ItemEmptyText>
              <AddItem to={"/"}>Add Items</AddItem>
            </ItemEmpty>
          )}

          <Container>
            {/* if wishList is not empty */}
            {lists.items.length !== 0 && <Tabel data={lists} />}

            {lists.items.length !== 0 && (
              <Row>
                <Col>
                  <ShoppingUpdate>
                    <Button>CONTINUE SHOPPING</Button>
                    <Button onClick={cleareCartItems}>CLEAR WISHLIST</Button>
                  </ShoppingUpdate>
                </Col>
              </Row>
            )}
          </Container>
        </CartMain>
      </Wrapper>
    </Layout>
  );
};

export default Wishlist;
