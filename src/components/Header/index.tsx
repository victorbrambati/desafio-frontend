import React from 'react';

import {
  Container,
  ArrowButtonLeft,
  ArrowButtonRight,
  Wrapper,
} from './styles';
import Pokemon from '../../styles/Icons/Pokemon';
import Arrow from '../../styles/Icons/Arrow';

type HeaderProps = {
  setBackOrNext: React.Dispatch<React.SetStateAction<number>>;
  backOrNext: number;
};

const Header = ({ setBackOrNext, backOrNext }: HeaderProps) => {
  return (
    <Container>
      <Wrapper>
        {backOrNext === 0 ? (
          <div style={{ width: 20, height: 34 }} />
        ) : (
          <ArrowButtonLeft onClick={() => setBackOrNext(backOrNext - 33)}>
            <Arrow style={{ transform: 'rotate(180deg)' }} />
          </ArrowButtonLeft>
        )}

        <Pokemon />

        <ArrowButtonRight onClick={() => setBackOrNext(backOrNext + 33)}>
          <Arrow />
        </ArrowButtonRight>
      </Wrapper>
    </Container>
  );
};

export default Header;
