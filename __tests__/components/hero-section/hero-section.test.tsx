import { expect, it, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { renderHeroSectionWithProviders } from '@/__tests__/utils/render-utils';

it('shows correct heading text, icons and "Join Us" button', () => {
  renderHeroSectionWithProviders();

  const heading = screen.getByRole('heading', {
    name: /unlock your future Learn easy at Home/i,
  });

  const unlockLogo = screen.getByRole('img', { name: /unlock/i });
  const starsLogo = screen.getByRole('img', { name: /stars/i });
  const homeLogo = screen.getByRole('img', { name: /home/i });
  const joinUsBtn = screen.getByRole('button', { name: /join us/i });

  expect(heading).toBeInTheDocument();
  expect(unlockLogo).toBeInTheDocument();
  expect(starsLogo).toBeInTheDocument();
  expect(homeLogo).toBeInTheDocument();
  expect(joinUsBtn).toBeInTheDocument();
});
