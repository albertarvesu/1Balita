import React from 'react';

import { StyledContent } from './Page.styled';

export const Page: React.FC = ({ children }) => (
  <StyledContent>{children}</StyledContent>
);

export default Page;
