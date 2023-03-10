// <=== Hooks ====>
import { useDispatch, useSelector } from "react-redux";

//<==== Components ====>
import ProductRatting from "../../Shared/Ratting/";

import SocialLink from "../SocialLink";

// <=== Styled Components  ====>
import {
  H4,
  Li,
  MetaText,
  OldPrice,
  ProductContentWrapper,
  ProductMeta,
  ProductPrice,
  Span,
  Text,
  Ul,
} from "./Styles";
import { useEffect, useState } from "react";
import { getSalePrice, shortText } from "../../../utils";
import Quantityy from "../Quantity";

import ProducrVariation from "../ColorVariation";
import { Box, Rating } from "@mui/material";
import SkletonLoad from "./SkletonLoad";
import { getCategory } from "../../../feature/reducer/category";

const ProductContent = ({ loading }) => {
  const [salePices, setSalePrices] = useState(null);

  const { category } = useSelector((state) => state.category);

  const dispatch = useDispatch();

  // get product
  const { product, discount, tags, rating } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    if (product && discount) {
      const salePice = getSalePrice({
        price: product.price.$numberDecimal,
        discount: discount.discount_percent.$numberDecimal,
      });

      setSalePrices(salePice);
    }
  }, [product, discount]);

  useDispatch(() => {
    dispatch(getCategory());
  }, []);

  return (
    <ProductContentWrapper>
      {loading ? (
        <SkletonLoad />
      ) : (
        <Box>
          <H4>{product && product?.name}</H4>
          <ProductPrice>
            {discount ? (
              <>
                {salePices && <Span>$ {salePices.toFixed(2)}</Span>}

                <OldPrice> $ {product?.price?.$numberDecimal}</OldPrice>
              </>
            ) : (
              <Span>$ {product?.price?.$numberDecimal}</Span>
            )}
          </ProductPrice>
          {/* Product Ratting */}
          {rating ? (
            <ProductRatting rating={rating?.rating} />
          ) : (
            <Rating name="read-only" value={0} readOnly />
          )}

          {/* Product Short Description */}
          <Text>{shortText(product?.short_desc, 200, 0, 200)}</Text>
          <ProducrVariation />
          {/* Product Quantity */}
          <Quantityy />
          {/* Product Categories */}
          <ProductMeta>
            <MetaText>Categories :</MetaText>
            <Ul>
              <Li>
                {category?.map((val, index) =>
                  val._id === product?.category_id ? val.category_name : ""
                )}
              </Li>
            </Ul>
          </ProductMeta>
          {/* Product Tags */}
          <ProductMeta>
            {tags?.length !== 0 && <MetaText>Tags :</MetaText>}

            <Ul>
              {tags?.map((val, index) => (
                <Li key={index}> {val?.tag_name} </Li>
              ))}
            </Ul>
          </ProductMeta>
          {/* Social Media */}
          {product && <SocialLink links={product} />}
        </Box>
      )}
    </ProductContentWrapper>
  );
};

export default ProductContent;
