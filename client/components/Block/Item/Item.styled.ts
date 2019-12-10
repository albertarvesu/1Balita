import styled from 'styled-components';

export const StyledListItem = styled.div`
  &:not(:first-child) {
    border-top: 1px solid #e3e3e3;
  }
  &:after {
    content: ' ';
    display: block;
    height: 0;
    clear: both;
  }
  padding: 0.5rem 0;
`;
