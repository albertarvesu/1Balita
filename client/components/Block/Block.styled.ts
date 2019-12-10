import styled from 'styled-components';

import { Text } from 'client/components/Styled/Typography/Text';

export const ItemImage = styled.figure`
  float: right;
  padding-left: 2px;
  > img {
    max-width: 50px;
    border: 1px solid #ebebeb;
    padding: 2px;
  }
`;

export const ViewMore = styled(Text)`
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
`;
