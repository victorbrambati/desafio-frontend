import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 93px;
  display: flex;
  justify-content: center;
  background-color: #f5db13;
  box-shadow: 0px 4px 16px rgba(1, 28, 64, 0.2);
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

export const Wrapper = styled.div`
  margin-top: 10px;
  width: 85%;
  height: 90%;
  display: flex;
  justify-content: space-between;
`;

export const ArrowButtonLeft = styled.button`
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
export const ArrowButtonRight = styled.button`
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
