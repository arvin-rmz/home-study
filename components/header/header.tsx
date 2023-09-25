import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import IconButton from '../ui/button/icon-button/icon-button';
import {
  LogoWrapper,
  SaveIconWrapper,
  StyledHeader,
} from '@/styles/components/header.styled';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <LogoWrapper>
        <Link href={'/'}>
          <Image
            src={'/home-study-logo-with-text.png'}
            alt='Home Study Logo'
            width={175}
            height={44}
            priority
          />
        </Link>
      </LogoWrapper>

      <SaveIconWrapper>
        <IconButton icon={'/images/icons/save.png'} />
      </SaveIconWrapper>
    </StyledHeader>
  );
};

export default Header;
