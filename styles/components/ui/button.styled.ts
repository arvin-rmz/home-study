import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledButtonWrapper = styled(motion.div)``;

export const StyledButton = styled(motion.button)`
  width: 300px;
  height: 50px;
  padding: 0.3rem 0;
  border: none;
  border-radius: 3rem;
  font-size: 1.5rem;
  font-weight: bold;

  color: ${({ theme }) => theme.colors.textLight};
  background-color: ${({ theme }) => theme.colors.primary};
`;
