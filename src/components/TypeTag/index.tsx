import React from 'react';

import { Container } from './styles';

export type PokemonTypes =
  | 'normal'
  | 'fire'
  | 'water'
  | 'electric'
  | 'grass'
  | 'ice'
  | 'fighting'
  | 'poison'
  | 'ground'
  | 'flying'
  | 'psychic'
  | 'bug'
  | 'rock'
  | 'ghost'
  | 'dragon'
  | 'dark'
  | 'steel'
  | 'fairy';

export type TypeTagProps = {
  type: PokemonTypes;
};

const TypeTag = ({ type }: TypeTagProps) => {
  return (
    <Container type={type}>
      <span>
        {/* Tradução */}
        {type === 'fire'
          ? 'Fogo'
          : type === 'water'
          ? 'Água'
          : type === 'electric'
          ? 'Elétrico'
          : type === 'grass'
          ? 'Grama'
          : type === 'ice'
          ? 'Gelo'
          : type === 'fighting'
          ? 'Lutador'
          : type === 'poison'
          ? 'Venenoso'
          : type === 'ground'
          ? 'Terra'
          : type === 'flying'
          ? 'Voador'
          : type === 'psychic'
          ? 'Psíquico'
          : type === 'rock'
          ? 'Rocha'
          : type === 'ghost'
          ? 'Fantasma'
          : type === 'dragon'
          ? 'Dragão'
          : type === 'dark'
          ? 'Sombrio'
          : type === 'steel'
          ? 'Aço'
          : type === 'fairy'
          ? 'Fada'
          : type === 'normal'
          ? 'Normal'
          : type === 'bug' && 'Pecervejo'}
      </span>
    </Container>
  );
};

export default TypeTag;
