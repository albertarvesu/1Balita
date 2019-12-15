import React from 'react'

import App from 'next/app'
import { ThemeProvider } from 'styled-components'

import { themeObject } from 'styles/theme'

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }
  componentDidMount() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(registration => {
          console.log('service worker registration successful: ', registration)
        })
        .catch(err => {
          console.warn('service worker registration failed', err.message)
        })
    }
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={themeObject}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
