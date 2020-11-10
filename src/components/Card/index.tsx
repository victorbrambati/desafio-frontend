import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Stats from '../Stats';
import TypeTag, { PokemonTypes } from '../TypeTag';
import { Container, StatsWrapper, TypesWrapper, Wrapper } from './styles';
import Img from '../Img';

type Pokemon = {
  id: number;
  name?: string;
  stats?: {
    base_stat: number;
    stat: {
      name:
        | 'hp'
        | 'attack'
        | 'defense'
        | 'speed'
        | 'special-attack'
        | 'special-defense';
    };
  }[];
  types?: {
    type: {
      name: PokemonTypes;
    };
  }[];
  sprites?: {
    other: {
      ['official-artwork']: {
        front_default: string;
      };
    };
  };
};

type Species = {
  evolution_chain: {
    url: string;
  };
};

type Evolution = {
  chain: {
    evolves_to: {}[];
  };
};

type CardProps = {
  name: string;
};

const Card = ({ name }: CardProps) => {
  const [pokemon, setPokemon] = useState<Pokemon>({ id: 1 });
  const [species, setSpecies] = useState<Species>({
    evolution_chain: { url: 'https://pokeapi.co/api/v2/evolution-chain/1' },
  });
  const [evolutionChain, setEvolutionChain] = useState<Evolution>();

  // idEvolutionChain faz a extração do id para achar a url da evolução
  const idEvolutionChain = species.evolution_chain.url.substring(42, 70);

  // evolution é para procurar dentro do array, se não existir nada ele não evoluí
  const evolution =
    evolutionChain?.chain.evolves_to.length === 0 ? false : true;

  useEffect(() => {
    api.get(`pokemon/${name}`).then((response) => {
      setPokemon(response.data);
    });

    api.get(`pokemon-species/${pokemon.id}`).then((response) => {
      setSpecies(response.data);
    });
    api.get(`evolution-chain/${idEvolutionChain}`).then((response) => {
      setEvolutionChain(response.data);
    });
  }, [name, pokemon.id, idEvolutionChain]);

  if (!pokemon) {
    return <div />;
  }

  return (
    <Container>
      <Wrapper>
        <h1>{pokemon.name}</h1>
        <StatsWrapper>
          <h2>{pokemon.stats && evolution && 'Pokemon Evolutivo'}</h2>

          {pokemon.stats?.map((e) => {
            return (
              <Stats
                key={e.stat.name}
                base_stat={e.base_stat}
                name={e.stat.name}
              />
            );
          })}
        </StatsWrapper>

        <TypesWrapper>
          {pokemon.types?.map((e) => {
            return <TypeTag key={e.type.name} type={e.type.name} />;
          })}
        </TypesWrapper>
      </Wrapper>
      {pokemon.sprites?.other && (
        <Img
          type={pokemon.types && pokemon.types[0].type.name}
          alt="Pokemon"
          src={pokemon.sprites.other['official-artwork'].front_default}
        />
      )}
    </Container>
  );
};

export default Card;
