import React from 'react';
import NextApp from 'next/app';
import { ThemeProvider } from 'theme-ui';
import { StaticKitProvider } from '@statickit/react';

import theme from '../theme';

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <StaticKitProvider site="303c2eee7d78">
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </StaticKitProvider>
    );
  }
}
