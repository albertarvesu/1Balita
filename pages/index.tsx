import React from 'react';

import Head from 'next/head';
import {
  LogoWrapper,
  NavWrapper,
  PageWrapper,
  NavTitle,
  NavText,
  StyledGrid
} from './index.styled';
import { Container } from 'client/components/Styled/Container/Container';
import Block from 'client/components/Block/Block';

import { SITE_NAME, SITE_TITLE } from '../constants';
import './index.css';
import newsProviders from './../providers.json';

export default () => (
  <React.Fragment>
    <Head>
      <title>{`${SITE_NAME} - ${SITE_TITLE}`}</title>
    </Head>
    <PageWrapper>
      <NavWrapper>
        <LogoWrapper>
          <img height={50} width={50} src="/static/juan.png" />
          <NavTitle>{SITE_NAME}</NavTitle>
        </LogoWrapper>
        <NavText>{SITE_TITLE}</NavText>
      </NavWrapper>
      <Container topOuterSpacing={2}>
        <StyledGrid>
          {newsProviders.map(item => (
            <Block key={item.name} {...item} />
          ))}
        </StyledGrid>
      </Container>
    </PageWrapper>
  </React.Fragment>
);
