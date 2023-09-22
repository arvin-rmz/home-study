import { expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import HomePage from '@/pages/index';

it('shows correct heading text', () => {
  render(<HomePage />);

  const heading = screen.getByRole('heading', { name: /hello word/i });

  expect(heading).toBeInTheDocument();
});
