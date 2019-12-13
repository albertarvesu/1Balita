import React, { useEffect } from 'react';

import ReactGA from 'react-ga';
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

const Index: React.FC = () => {
  useEffect(() => {
    ReactGA.initialize(process.env.GOOGLE_ANALYTICS_CODE || 'G-D1W540KSYE');
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
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
};

export default Index;
