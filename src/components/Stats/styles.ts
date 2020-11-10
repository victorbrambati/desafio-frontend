import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > div {
    width: 38px;
    height: 36px;
    border: 3px solid #212121;
    margin-bottom: 6px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    > span {
      font-size: 15px;
      font-weight: 400;
      font-family: 'Karla';
      color: #212121;
    }
  }

  > h2 {
    font-size: 12px;
    font-weight: 400;
    font-family: 'Karla';
    color: #4b4b4b;
  }
`;

export const HpContainer = styled.div`
  display: flex;
  width: 46px;
  height: 19px;
  position: absolute;
  bottom: 136%;
  left: 68%;

  > h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #000000;
    margin: 0;
    margin-right: 4px;
  }
  > span {
    font-weight: 700;
    font-size: 16px;
    margin: 0;

    color: #000000;
  }
`;
