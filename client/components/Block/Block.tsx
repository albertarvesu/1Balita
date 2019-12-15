import React from 'react';

import { Container } from 'client/components/Styled/Container/Container';
import BlockHeader from './Header/Header';
import BlockItem from './Item/Item';
import { ItemImage, ViewMore } from './Block.styled';

interface IItem {
  id: string;
  provider: string;
  text: string;
  url: string;
  mediaUrl: string;
}

interface IProps {
  name: string;
  link: string;
  imageUrl: string;
  items: ReadonlyArray<IItem>;
}

const DEFAULT_COUNT = 10;

export const Block: React.FC<IProps> = ({ name, link, imageUrl, items }) => {
  const [collapsed, setCollapsed] = React.useState(true);
  const onViewMore = () => setCollapsed(!collapsed);
  const showMore = items.length > DEFAULT_COUNT && collapsed;
  return (
    <Container bottomOuterSpacing={2}>
      <BlockHeader src={imageUrl} to={link} name={name} />
      <Container topOuterSpacing={1}>
        {(collapsed ? items.slice(0, DEFAULT_COUNT) : items).map(
          (item: IItem) => (
            <BlockItem key={item.id} to={item.url}>
              {item.mediaUrl && (
                <ItemImage>
                  <img src={item.mediaUrl} alt={item.text} />
                </ItemImage>
              )}
              {item.text}
            </BlockItem>
          )
        )}
      </Container>
      {showMore && (
        <Container>
          <ViewMore title={`View more from ${name}`} onClick={onViewMore}>
            View more
          </ViewMore>
        </Container>
      )}
    </Container>
  );
};

export default Block;
