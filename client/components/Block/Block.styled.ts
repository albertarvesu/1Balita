import styled from 'styled-components';

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledProviderLogo = styled.img`
  border-radius: 50%;
  margin-right: 0.25rem;
`;

export const StyledListItem = styled.div`
  &:not(:first-child) {
    border-top: 1px solid #e3e3e3;
  }
  padding: 0.5rem 0;
`;
