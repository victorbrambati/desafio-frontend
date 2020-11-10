import styled from 'styled-components';

export const Container = styled.div`
  width: 336px;
  height: 136.86px;
  background-color: #f6f7f9;
  border-radius: 8px;
  margin-top: 45px;
  filter: drop-shadow(4px 4px 4px rgba(33, 33, 33, 0.1));
  display: flex;
`;
export const Wrapper = styled.div`
  width: 190px;
  margin-left: 21px;
  margin-top: 9px;
  height: 100%;
  > h1 {
    font-size: 18px;
    font-weight: 700;
    text-transform: capitalize;
    text-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
    margin: 0;
    width: 120px;
  }
`;

export const StatsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  position: relative;
  width: 160px;
  height: 60px;
  margin-top: 22px;
  margin-right: 3px;
  > h2 {
    white-space: nowrap;
    position: absolute;
    top: 15px;
    right: 77.5%;
    font-size: 12px;
    font-weight: 400;
    color: #4b4b4b;
    transform: rotate(-90deg);
  }
`;

export const TypesWrapper = styled.div`
  display: flex;
  margin-right: 5px;
`;
