import styled from "styled-components";

export const Wrapper = styled.div`
  background: transparent;
  width: 100%;
  height: 100%;
`;

export const ProducrWrapper = styled.div`
  background: #fff;
  border-radius: 0px 15px 15px 15px;
  overflow: hidden;
`;

export const PageHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem;
  padding: 1rem;
`;

export const HeaderSearch = styled.div``;

export const ActionBar = styled.div``;

export const Plus = styled.span`
  font-size: 26px;
  display: inline-block;
  margin-right: 10px;
  font-weight: 400;
`;

export const HeaderWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Menu = styled.div`
  background: #fff;
  display: inline-block;
  padding: 1rem;
  width: 22%;
  border-radius: 15px 15px 1px 1px;
  color: #221ecd;
  display: flex;
  justify-content: space-around;
  position: relative;
  @media (max-width: 767px) {
    width: 50%;
  }
`;
export const Text = styled.span`
  font-weight: 600;
  font-size: 22px;
`;

export const Icon = styled.span`
  i {
    font-weight: 700;
    font-size: 16px;
  }
`;

export const Amount = styled.div`
  width: 30px;
  height: 30px;
  background: #221ecd;
  border-radius: 50%;
  margin-left: 0.3rem;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  max-width: 50px;
  border-radius: 8px;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
`;

export const EmptyOrder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
  font-weight: 500;
  color: #413e3e;
`;
