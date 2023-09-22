import React from 'react';
import { Variants } from 'framer-motion';

import {
  StyledButton,
  StyledButtonWrapper,
} from '@/styles/components/ui/button.styled';

export const buttonVariants: Variants = {
  animate: { scale: 1 },
  tap: { scale: 0.8 },
  hover: { scale: 1.2 },
};

const Button = () => {
  return (
    <StyledButtonWrapper
      variants={buttonVariants}
      animate='animate'
      whileHover={'hover'}
      whileTap={'tap'}
    >
      <StyledButton>Join Us</StyledButton>
    </StyledButtonWrapper>
  );
};

export default Button;
