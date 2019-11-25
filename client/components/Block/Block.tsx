import React from 'react';

import { Container } from 'client/components/Styled/Container/Container';
import BlockHeader from './Header/Header';
import BlockItem from './Item/Item';

interface IProps {
  name: string;
  link: string;
  imageUrl: string;
}

export const Block: React.FC<IProps> = ({ name, link, imageUrl }) => {
  return (
    <Container bottomOuterSpacing={1}>
      <BlockHeader src={imageUrl} to={link} name={name} />
      <Container topOuterSpacing={1}>
        <BlockItem to="#">
          Wait, I Just Learned This TikTok Girl Isn't Ariana Grande, And Now I'm
          Freakin' TF Out
        </BlockItem>
      </Container>
    </Container>
  );
};

export default Block;
