import styled, { css } from 'styled-components';
import { ImgType } from './index';

const Background = {
  normal: css`
    background: linear-gradient(270deg, #eeeeee 0.15%, #ffffff 100%);
  `,
  fire: css`
    background: linear-gradient(
      270deg,
      #b33327 0.15%,
      #d93e30 100%,
      #d93e30 100%
    );
  `,
  water: css`
    background: linear-gradient(270deg, #5bc7fa 0.15%, #35baff 100%);
  `,
  electric: css`
    background: linear-gradient(270deg, #f2cb07 0.15%, #f2b807 100%);
  `,
  grass: css`
    background: linear-gradient(270deg, #64d368 0.15%, #64d368 70.88%);
  `,
  ice: css`
    background: linear-gradient(270deg, #5bc7fa 0.15%, #35baff 100%);
  `,
  fighting: css`
    background: linear-gradient(
      270deg,
      #b33327 0.15%,
      #d93e30 100%,
      #d93e30 100%
    );
  `,
  poison: css`
    background: linear-gradient(270deg, #c150e9 0.15%, #d878fa 100%);
  `,
  ground: css`
    background: linear-gradient(270deg, #a66839 0.15%, #bb865d 100%);
  `,
  flying: css`
    background: linear-gradient(270deg, #eeeeee 0.15%, #ffffff 100%);
  `,
  psychic: css`
    background: linear-gradient(270deg, #c150e9 0.15%, #d878fa 100%);
  `,
  bug: css`
    background: linear-gradient(270deg, #64d368 0.15%, #64d368 70.88%);
  `,
  rock: css`
    background: linear-gradient(270deg, #adadad 0.15%, #c9c9c9 100%);
  `,
  ghost: css`
    background: linear-gradient(270deg, #eeeeee 0.15%, #ffffff 100%);
  `,
  dragon: css`
    background: linear-gradient(
      270deg,
      #b33327 0.15%,
      #d93e30 100%,
      #d93e30 100%
    );
  `,
  dark: css`
    background: linear-gradient(270deg, #adadad 0.15%, #c9c9c9 100%);
  `,
  steel: css`
    background: linear-gradient(270deg, #adadad 0.15%, #c9c9c9 100%);
  `,
  fairy: css`
    background: linear-gradient(270deg, #f89eae 0.15%, #f4b5c1 100%);
  `,
};

export const Image = styled.img<ImgType>`
  ${({ type }) => css`
width: 155px;
  height: 137px;
  border-radius: 0px 8px 8px 0px;

      ${type && Background[type]};
    }
  `}
`;
