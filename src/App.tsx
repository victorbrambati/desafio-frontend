import React, { useEffect, useState } from 'react';
import api from './services/api';
import Card from './components/Card';
import GlobalStyles from './styles/GlobalStyles';
import { Container, Wrapper } from './styles/AppStyle';
import Header from './components/Header';

type Pokemons = {
  count: number;
  previous: string;
  results: {
    name: string;
  }[];
};

function App() {
  const [pokemons, setPokemons] = useState<Pokemons>();
  const [backOrNext, setBackOrNext] = useState(0);

  const backOrNextUrl = `pokemon?offset=${backOrNext}&limit=33`;

  useEffect(() => {
    api.get(`${backOrNextUrl}`).then((response) => {
      setPokemons(response.data);
    });
  }, [backOrNextUrl]);

  if (!pokemons) {
    return <div />;
  }

  return (
    <>
      <Container>
        <Header backOrNext={backOrNext} setBackOrNext={setBackOrNext} />
        <h1>
          {pokemons?.count} <b>Pokemons</b> encontrados
        </h1>
        <Wrapper>
          {pokemons?.results.map((e) => {
            return <Card key={e.name} name={e.name} />;
          })}
        </Wrapper>
      </Container>
      <GlobalStyles />
    </>
  );
}

export default App;
