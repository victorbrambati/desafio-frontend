import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(180deg, #ffffff 30.32%, #f5f5f5 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h1 {
    margin: 73px 0 90px 0;
    text-align: center;
    font-size: 35px;
    font-weight: 400;
    letter-spacing: 3px;
  }
`;

export const Wrapper = styled.div`
  width: 67%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 1500px) {
    width: 90%;
  }
  @media (max-width: 1200px) {
    width: 70%;
  }
  @media (max-width: 1025px) {
    width: 80%;
  }
  @media (max-width: 900px) {
    width: 96%;
    justify-content: center;
  }
`;
