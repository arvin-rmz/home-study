import React from 'react';

import Button from '../ui/button/button';
import {
  IconsContainer,
  StyledHeroSection,
} from '@/styles/components/hero-section/hero-section.styled';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <StyledHeroSection>
      <h1>
        Unlock Your Future
        <br />
        Learn easy at <span>Home</span>
      </h1>
      <IconsContainer>
        <div>
          <Image
            src='/images/icons/unlock-icon.jpg'
            alt='Unlock'
            width={42}
            height={48}
          />
        </div>

        <div>
          <Image
            src='/images/icons/stars-icon.jpg'
            alt='Stars'
            width={60}
            height={60}
          />
        </div>

        <div>
          <Image
            src='/images/icons/home-icon.jpg'
            alt='Home'
            width={48}
            height={48}
          />
        </div>
      </IconsContainer>

      <div>
        <Button />
      </div>
    </StyledHeroSection>
  );
};

export default HeroSection;
