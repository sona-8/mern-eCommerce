//<=== Hooks ====>
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

//<=== Reducer functions  ====>
import { addcartTotal } from "../../feature/reducer/addToCart";
import { addWishList } from "../../feature/reducer/wishList";

//<=== Styled Components ====>
import {
  Header,
  HeaderRightWrapper,
  Li,
  Logo,
  MainMenu,
  Link,
  Ul,
  Icon,
  HeaderWrapper,
  Count,
  Img,
  User,
  UserImg,
  Account,
} from "./styles";
import { Alert, Col, Container, Row } from "reactstrap";

//<===  React Icons ===>
import {
  AiOutlineSearch,
  AiOutlineUserAdd,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import { getLocalstorage, wHeigth } from "../../utils";
import AccountDropDown from "./AccountDropDown";

const NavBar = () => {
  const [height, setHeight] = useState(0);
  const [toggle, setToggle] = useState(false);

  const menuList = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "Shop",
      link: "#",
    },
    {
      name: "Colection",
      link: "#",
    },
    {
      name: "Pages",
      link: "#",
    },
    {
      name: "Contuct Us",
      link: "#",
    },
  ];

  const { lists } = useSelector((state) => state.wishList);

  const { total } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    const wishlist = getLocalstorage("wistList");
    if (wishlist.length !== 0) {
      dispatch(addWishList(wishlist));
    }
  }, [dispatch]);

  useEffect(() => {
    const cartList =
      getLocalstorage("cartTotal").length !== 0
        ? getLocalstorage("cartTotal")
        : null;

    if (cartList) {
      dispatch(addcartTotal(cartList));
    }
  }, [dispatch]);

  // Sticky Header
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const windowHeight = Math.floor(window.scrollY);
      setHeight(windowHeight);
    });
  }, []);

  const handleTogle = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  return (
    <HeaderWrapper height={height}>
      <Container>
        <Row>
          <Col>
            <Header>
              <Logo>
                <NavLink to={"/"}>
                  {/* <H3>Flone.</H3> */}
                  <Img
                    src="https://res.cloudinary.com/dza2t1htw/image/upload/v1665039683/me_yb2uww.png"
                    alt="logo"
                  />
                </NavLink>
              </Logo>
              <MainMenu>
                <Ul>
                  {menuList.map((menu, index) => (
                    <Li key={index}>
                      <Link to="/">{menu.name}</Link>
                    </Li>
                  ))}
                </Ul>
              </MainMenu>
              <HeaderRightWrapper>
                <Icon>
                  <AiOutlineSearch />
                </Icon>
                {user ? (
                  <Account>
                    <User onClick={handleTogle}>
                      <UserImg src={user.avatar} />
                    </User>
                    <AccountDropDown toggle={toggle} />
                  </Account>
                ) : (
                  <NavLink to={"/login"}>
                    <Icon>
                      <AiOutlineUserAdd />
                    </Icon>
                  </NavLink>
                )}

                <Icon>
                  <Count>0</Count>
                  <FontAwesomeIcon icon={faShuffle} />
                </Icon>
                <NavLink to={"/wishlist"}>
                  <Icon>
                    <Count>{lists.items.length}</Count>
                    <AiOutlineHeart />
                  </Icon>
                </NavLink>

                <NavLink to={"/cartitems"}>
                  <Icon>
                    {total ? <Count>{total.totalQty}</Count> : <Count>0</Count>}

                    <AiOutlineShoppingCart />
                  </Icon>
                </NavLink>
              </HeaderRightWrapper>
            </Header>
          </Col>
        </Row>
      </Container>
    </HeaderWrapper>
  );
};

export default NavBar;
