import React from "react";

import { useNavigate } from "react-router-dom";
import {
  ActionBar,
  Amount,
  HeaderSearch,
  HeaderWrapper,
  Icon,
  Menu,
  PageHeaderContainer,
  Plus,
  ProducrWrapper,
  Text,
} from "./Styles";
import { Button } from "../../Shared/Styles";
import Query from "./Query";
import Table from "./Table";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();

  const { products } = useSelector((state) => state.getProducts);

  const navigateHandler = () => {
    navigate("/dashboard/shahadat/newproduct");
  };
  return (
    <HeaderWrapper>
      <Menu>
        <Icon>
          <i className="fa-solid fa-bars"></i>
        </Icon>
        <Text>All Products</Text>
        <Amount>{products.length}</Amount>
      </Menu>
      <ProducrWrapper>
        <PageHeaderContainer>
          <HeaderSearch>
            <Query />
          </HeaderSearch>
          <ActionBar>
            <Button bg="#221ecd" onClick={navigateHandler}>
              <Plus>+</Plus>
              New Product
            </Button>
          </ActionBar>
        </PageHeaderContainer>
        <Table />
      </ProducrWrapper>
    </HeaderWrapper>
  );
};

export default Header;