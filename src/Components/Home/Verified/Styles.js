import { Box } from "@mui/material";
import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 2rem 0;
`;

export const Verified = styled.div`
  background: #fff;
  padding: 2rem;
`;

export const Title = styled.div``;

export const H5 = styled.h5`
  font-weight: 700;
  font-size: 20px;
  color: #453b3b;
  margin: 0;
  padding-top: 32px;
  padding-bottom: 8px;
  padding-left: 25px;
`;

export const Items = styled.div`
  background: #fff;
  padding: 20px 10px;
`;

export const Item = styled.div`
  background: #edf2fd;
  display: flex;
  border-radius: 5px;
  padding: 2rem 1rem;
`;

export const ImgWrapper = styled.div`
  background: #fff;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 147px;
  height: 100px;
  margin: 0 auto;
`;

export const Img = styled.img`
  max-width: 100%;
`;

export const Caption = styled.div`
  h5 {
    font-size: 18px;
    font-weight: 700;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    color: #9b9b9b;
  }
`;

export const MostWrapper = styled(Box)`
  @media (max-width: 500px) {
    display: none !important;
  }
`;
