import React from 'react';

import {
  LogoWrapper,
  NavWrapper,
  PageWrapper,
  NavTitle,
  NavText,
  NavTextHeading,
  StyledGrid
} from './index.styled';
import { Container } from 'client/components/Styled/Container/Container';
import Block from 'client/components/Block/Block';

import './index.css';
import newsProviders from './providers.json';

export default () => (
  <PageWrapper>
    <NavWrapper>
      <LogoWrapper>
        <img height={50} width={50} src="/static/juan.png" />
        <NavTitle>1Balita</NavTitle>
      </LogoWrapper>
      <NavText>
        Online News for Every <NavTextHeading>Juan</NavTextHeading>
      </NavText>
    </NavWrapper>
    <Container topOuterSpacing={2}>
      <StyledGrid>
        {newsProviders.map(item => (
          <Block key={item.name} {...item} />
        ))}
      </StyledGrid>
    </Container>
  </PageWrapper>
);
