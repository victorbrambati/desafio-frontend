import styled, { css } from 'styled-components';
import { TypeTagProps } from './index';

const Background = {
  normal: css`
    background: #fbfbfb;
  `,
  fire: css`
    background: #ee6142;
  `,
  water: css`
    background: #35baff;
  `,
  electric: css`
    background: #ffd12d;
  `,
  grass: css`
    background: #68de6c;
  `,
  ice: css`
    background: #35baff;
  `,
  fighting: css`
    background: #ee6142;
  `,
  poison: css`
    background: #af64c8;
  `,
  ground: css`
    background: #a6876f;
  `,
  flying: css`
    background: #fbfbfb;
  `,
  psychic: css`
    background: #af64c8;
  `,
  bug: css`
    background: #68de6c;
  `,
  rock: css`
    background: #c0c0c0;
  `,
  ghost: css`
    background: #fbfbfb;
  `,
  dragon: css`
    background: #ee6142;
  `,
  dark: css`
    background: #c0c0c0;
  `,
  steel: css`
    background: #c0c0c0;
  `,
  fairy: css`
    background: #fdc4ce;
  `,
};

export const Container = styled.div<TypeTagProps>`
  ${({ type }) => css`
    > span {
      padding: 2px 6px;
      font-family: 'Roboto', 'Karla';
      font-weight: 400;
      font-size: 14px;
      color: #212121;
      margin-right: 6px;

      box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.18);
      border-radius: 11px;

      ${type && Background[type]};
    }
  `}
`;
