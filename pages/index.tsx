import React, { useEffect } from 'react'

import ReactGA from 'react-ga'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'

import {
  LogoWrapper,
  NavWrapper,
  PageWrapper,
  NavTitle,
  NavText,
  StyledGrid
} from './index.styled'
import { Container } from 'client/components/Styled/Container/Container'
import Block from 'client/components/Block/Block'

import { SITE_NAME, SITE_TITLE } from '../constants'
import './index.css'
import newsProviders from './../providers.json'

interface IProvider {
  name: string
  link: string
  imageUrl: string
}

export const Index = ({ newsItems }) => {
  useEffect(() => {
    ReactGA.initialize(process.env.GOOGLE_ANALYTICS_CODE || '')
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.pathname)
  }, [])
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
            {newsProviders.map((provider: IProvider) => (
              <Block
                key={provider.name}
                {...provider}
                items={newsItems[provider.name]}
              />
            ))}
          </StyledGrid>
        </Container>
      </PageWrapper>
    </React.Fragment>
  )
}

Index.getInitialProps = async function() {
  const urls = newsProviders.map(
    (provider: IProvider) =>
      `${process.env.API_HOST}/news?provider=${provider.name}`
  )
  const newsItems = await Promise.all(urls.map(url => fetch(url)))
    .then(resp => Promise.all(resp.map(resp => resp.json())))
    .then(jsons =>
      newsProviders.reduce(
        (accum: any, provider: IProvider, index: number) => ({
          ...accum,
          [provider.name]: jsons[index]
        }),
        {}
      )
    )
    .catch(err => console.log(err))
  return { newsItems }
}

export default Index
