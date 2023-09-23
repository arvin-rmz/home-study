import { expect, it, vi } from 'vitest';
import { screen } from '@testing-library/react';

import { renderHeaderWithProviders } from '@/__tests__/utils/render-utils';

it('shows Logo as link and save icon button', () => {
  renderHeaderWithProviders();

  expect(
    screen.getByRole('link', { name: /home study logo/i })
  ).toBeInTheDocument();

  expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument();
});
