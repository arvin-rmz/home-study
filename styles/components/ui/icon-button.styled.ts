import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const IconButtonWrapper = styled.div`
  width: fit-content;
`;

export const StyledIconButton = styled(motion.button)`
  background: transparent;
  border: none;
  width: 42px;
  height: 42px;
  border-radius: 50%;
`;
