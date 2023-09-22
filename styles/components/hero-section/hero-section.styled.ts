import { styled } from 'styled-components';

export const StyledHeroSection = styled.section`
  text-align: center;

  & h1 {
    font-size: 2rem;
    margin-top: 6rem;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem 0 3rem;

  & > div {
    width: 36px;
  }
`;
