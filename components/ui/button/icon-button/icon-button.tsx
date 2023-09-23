import React from 'react';
import Image from 'next/image';

import { buttonVariants } from '../button';
import {
  IconButtonWrapper,
  StyledIconButton,
} from '@/styles/components/ui/icon-button.styled';

export interface IconButtonProps {
  icon: string;
}

const IconButton: React.FC<IconButtonProps> = ({ icon }) => {
  return (
    <IconButtonWrapper>
      <StyledIconButton
        variants={buttonVariants}
        animate='animate'
        whileHover={'hover'}
        whileTap={'tap'}
      >
        <Image
          src={icon}
          alt='Save'
          width={40}
          height={42}
        />
      </StyledIconButton>
    </IconButtonWrapper>
  );
};

export default IconButton;
