import React from 'react';

import { StyledGrid } from './Content.styled';

import { Container } from 'client/components/Styled/Container/Container';
import Block from 'client/components/Block/Block';

const providers = {
  news: [
    {
      name: '@ABSCBNNews',
      link: '//news.abs-cbn.com',
      imageUrl:
        'https://pbs.twimg.com/profile_images/1194096034722435072/kfkit_H8_normal.jpg'
    },
    {
      name: '@gmanews',
      link: '//gmanews.tv',
      imageUrl:
        'https://pbs.twimg.com/profile_images/1131064290998231041/3by86sfl_normal.png'
    },
    {
      name: '@inquirerdotnet',
      link: '//inquirer.net',
      imageUrl:
        'https://pbs.twimg.com/profile_images/1176785678694141952/zhu6Qz3__normal.png'
    }
  ]
};

export const Content: React.FC = () => (
  <Container topOuterSpacing={2}>
    <StyledGrid>
      {providers.news.map(item => (
        <Block key={item.name} {...item} />
      ))}
    </StyledGrid>
  </Container>
);

export default Content;
