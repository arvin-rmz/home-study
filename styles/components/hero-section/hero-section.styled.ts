import { styled } from 'styled-components';

export const StyledHeroSection = styled.section`
  text-align: center;
  position: relative;
  padding: 3rem 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  & > img {
    z-index: -1;
  }
`;

export const TextContainer = styled.div`
  flex: 1;
  max-width: 90%;
  margin: 0 auto;

  color: ${({ theme }) => theme.colors.textLight};

  & h1 {
    font-size: 2.6rem;
    font-weight: 600;
    line-height: 1.2;
    margin-top: 10%;
  }

  & h1 span {
    font-size: 3rem;

    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const UnlockIconWrapper = styled.div`
  width: 30px;
`;

export const StarsIconWrapper = styled.div`
  width: 40px;
`;

export const HomeIconWrapper = styled.div`
  width: 34px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`;
