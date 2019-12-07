import React from 'react';

import { Container } from 'client/components/Styled/Container/Container';
import BlockHeader from './Header/Header';
import BlockItem from './Item/Item';
import { ViewMore } from './Block.styled';

interface IProps {
  name: string;
  link: string;
  imageUrl: string;
}

const DEFAULT_COUNT = 8;

export const Block: React.FC<IProps> = ({ name, link, imageUrl }) => {
  const [news, setNews] = React.useState<any[]>([]);
  const [collapsed, setCollapsed] = React.useState(true);

  React.useEffect(() => {
    fetch(`//${document.location.host}/news?provider=${name}`)
      .then(resp => resp.json())
      .then(setNews);
  }, [name]);

  const onViewMore = () => setCollapsed(!collapsed);

  const items = collapsed ? news.slice(0, DEFAULT_COUNT) : news;

  const showMore = news.length > DEFAULT_COUNT && collapsed;

  if (!news.length) {
    return null;
  }

  return (
    <Container bottomOuterSpacing={1}>
      <BlockHeader src={imageUrl} to={link} name={name} />
      <Container topOuterSpacing={1}>
        {items.map(item => (
          <BlockItem key={item.id} to={item.url}>
            {item.text}
          </BlockItem>
        ))}
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
