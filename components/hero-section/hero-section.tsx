import React from 'react';
import Image from 'next/image';
import { useTheme } from 'styled-components';

import Button, { ButtonSize } from '../ui/button/button';
import {
  ButtonsWrapper,
  HomeIconWrapper,
  IconsContainer,
  StarsIconWrapper,
  StyledHeroSection,
  TextContainer,
  UnlockIconWrapper,
} from '@/styles/components/hero-section.styled';

const HeroSection: React.FC = () => {
  const theme = useTheme();

  return (
    <StyledHeroSection>
      <TextContainer>
        <h1>
          Unlock Your Future
          <br />
          Learn easy at <span>Home</span>
        </h1>
        <IconsContainer>
          <UnlockIconWrapper>
            <Image
              src='/images/icons/unlock-icon.png'
              alt='Unlock'
              width={42}
              height={48}
            />
          </UnlockIconWrapper>

          <StarsIconWrapper>
            <Image
              src='/images/icons/stars-icon.png'
              alt='Stars'
              width={60}
              height={60}
            />
          </StarsIconWrapper>

          <HomeIconWrapper>
            <Image
              src='/images/icons/home-icon.png'
              alt='Home'
              width={48}
              height={48}
            />
          </HomeIconWrapper>
        </IconsContainer>
      </TextContainer>

      <ButtonsWrapper>
        <Button
          text='Join Us'
          icon='/images/icons/join-us.png'
        />

        <Button
          text='Explore Courses'
          icon='/images/icons/explore-courses.png'
          size={ButtonSize.md}
          color={theme.colors.secondary}
        />

        <Button
          text='Browse Posts'
          icon='/images/icons/browse-posts.png'
          size={ButtonSize.md}
          color={theme.colors.accent}
        />
      </ButtonsWrapper>
    </StyledHeroSection>
  );
};

export default HeroSection;
