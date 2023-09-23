import React from 'react';
import { Variants } from 'framer-motion';
import Image from 'next/image';

import {
  StyledButton,
  StyledButtonWrapper,
} from '@/styles/components/ui/button.styled';

export const buttonVariants: Variants = {
  animate: { scale: 1 },
  tap: { scale: 0.8 },
  hover: { scale: 1.2 },
};

export enum ButtonSize {
  sm = 'small',
  md = 'medium',
  lg = 'large',
}

export interface ButtonProps {
  text: string;
  icon?: string;
  color?: string;
  size?: ButtonSize;
}

const Button: React.FC<ButtonProps> = ({ text, icon, color, size }) => {
  return (
    <StyledButtonWrapper>
      <StyledButton
        color={color}
        size={size}
        variants={buttonVariants}
        animate='animate'
        whileHover={'hover'}
        whileTap={'tap'}
      >
        {icon && (
          <span>
            <Image
              src={icon}
              alt={text}
              width={25}
              height={34}
            />
          </span>
        )}

        {text}
      </StyledButton>
    </StyledButtonWrapper>
  );
};

export default Button;
