import React from 'react';

import { Link } from 'client/components/Styled/Link/Link';
import { StyledListItem } from './Item.styled';

interface IProps {
  to: string;
}

export const BlockItem: React.FC<IProps> = ({ to, children }) => (
  <StyledListItem>
    <Link href={to} target="_blank">
      {children}
    </Link>
  </StyledListItem>
);

export default BlockItem;
