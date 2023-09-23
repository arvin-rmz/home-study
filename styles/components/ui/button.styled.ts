import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ButtonSize } from '@/components/ui/button/button';

export const StyledButtonWrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

export const StyledButton = styled(motion.button)<{
  color?: string;
  size?: ButtonSize;
}>`
  padding: 0.3rem 0;
  border: none;
  border-radius: 3rem;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 50px;

  width: ${({ size }) => size && size === ButtonSize.md && '250px'};
  height: ${({ size }) => size && size === ButtonSize.md && '40px'};
  width: ${({ size }) => size && size === ButtonSize.sm && '200px'};
  height: ${({ size }) => size && size === ButtonSize.sm && '30px'};

  font-size: ${({ size }) => size && size === ButtonSize.md && '1.25rem'};
  font-size: ${({ size }) => size && size === ButtonSize.sm && '1rem'};

  color: ${({ theme }) => theme.colors.textLight};

  background-color: ${({ theme, color }) =>
    color ? color : theme.colors.primary};

  & span {
    margin: auto 0.4rem auto 0;
    width: 30px;
  }
`;
