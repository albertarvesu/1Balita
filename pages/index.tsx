import React from 'react';

import './index.css';

import Page from 'client/components/Page/Page';
import Navigation from 'client/components/Navigation/Navigation';
import Content from 'client/components/Content/Content';

export default () => (
  <Page>
    <Navigation />
    <Content />
  </Page>
);
