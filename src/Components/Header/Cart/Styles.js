import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const Body = styled.div`
  height: 330px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Bottom = styled.div`
  position: absolute;
  bottom: 0;
  background: #fff;
  width: 100%;
  left: 0;
`;
export const TotalWrapper = styled.div`
  padding: 1rem;
  border-top: 1px solid #ddd;
  text-transform: uppercase;
  background: #fff;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SubTotal = styled.div``;

export const TotalPrice = styled.div`
  color: #221ecd;
`;

export const ViewCart = styled(NavLink)`
  padding: 1rem;
  border-top: 1px solid #ddd;
  text-align: center;
  cursor: pointer;
  font-weight: 600;
  text-transform: uppercase;
  display: block;
`;
export const CheckOutLink = styled(NavLink)`
  display: block;
  color: #fff !important;
`;

export const CheckOut = styled.div`
  background: #2b88de;
  padding: 1rem;
  border-top: 1px solid #ddd;
  text-align: center;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
`;

export const Span = styled.span`
  font-weight: 700;
  display: block;
  text-align: center;
`;

export const CartWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
  background: #fff;
  border-bottom: 1px solid #ddd;
  padding-bottom: 1rem;
`;

export const Left = styled.div`
  margin-right: 1rem;
`;

export const Middle = styled.div``;

export const ImgWrapper = styled.div`
  width: 60px;
  padding: 6px;
  background: #edf2fd;
  border-radius: 6px;
`;

export const Img = styled.img`
  width: 100%;
`;

export const Name = styled.h5`
  font-size: 14px;
  display: block;
  text-align: left;
  width: 100%;
  margin-bottom: 0.5rem;
`;

export const Price = styled.h6``;

export const Qty = styled.h6`
  margin-bottom: 4px;
`;

export const Right = styled.div`
  width: 40px;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Close = styled.span`
  cursor: pointer;
`;

export const EmptyWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
