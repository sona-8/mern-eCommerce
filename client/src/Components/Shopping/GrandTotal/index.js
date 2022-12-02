import { Box } from "@mui/material";
import { useAddToCart } from "../../../hooks/useAddToCart";
import { Cuntinue, H4, TitleWrap } from "../Styles";
import { boxStyle, GrandTotalTitle, H5, Price, Span } from "./Styles";

const GrandTotal = () => {
  const { totallPrice } = useAddToCart();

  return (
    <Box sx={{ ...boxStyle, borderRadius: 4 }}>
      <TitleWrap>
        <H4>Cart Total</H4>
      </TitleWrap>
      <H5>
        Subtotal <Span>$ {totallPrice()}</Span>
      </H5>
      <GrandTotalTitle>
        Total <Price>$ {totallPrice()}</Price>
      </GrandTotalTitle>
      <Cuntinue to={`/billing`}>PROCEED TO CHECKOUT</Cuntinue>
    </Box>
  );
};

export default GrandTotal;
