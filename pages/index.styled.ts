import styled from 'styled-components';

export const PageWrapper = styled.div`
  max-width: 72rem;
  margin: 0pt auto;
  padding: 1rem;
`;

export const NavWrapper = styled.nav`
  display: flex;
  border-bottom: 1px solid #e3e3e3;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  @media (max-width: 600px) {
    height: 6rem;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const NavTitle = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  margin-left: 0.5rem;
`;

export const NavText = styled.h1`
  font-size: 1.25rem;
  margin-left: 0.5rem;
  color: #808080;
`;

export const NavTextHeading = styled.span`
  color: #4d4d4d;
  font-weight: 400;
`;

export const StyledGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1.25rem;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export default PageWrapper;
