import React from 'react';

import { Container, HpContainer } from './styles';

type StatsProps = {
  name:
    | 'hp'
    | 'attack'
    | 'defense'
    | 'speed'
    | 'special-attack'
    | 'special-defense';
  base_stat: number;
};

const Stats = ({ name, base_stat }: StatsProps) => {
  // tira a defesa e ataque especial do array
  if (name === 'special-attack') {
    return <div style={{ display: 'none' }} />;
  }
  if (name === 'special-defense') {
    return <div style={{ display: 'none' }} />;
  }

  return name !== 'hp' ? (
    <Container>
      <div>
        <span>{base_stat}</span>
      </div>
      <h2>
        {name === 'attack' && 'Ataque'}
        {name === 'defense' && 'Defesa'}
        {name === 'speed' && 'Velocidade'}
      </h2>
    </Container>
  ) : (
    <HpContainer>
      <h2>HP</h2>
      <span>{base_stat}</span>
    </HpContainer>
  );
};

export default Stats;
