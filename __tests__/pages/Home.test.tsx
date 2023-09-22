import { expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import HomePage from '@/pages/index';
import { defaultTheme } from '@/styles/theme/default.theme';

function renderWithProviders() {
  render(
    <>
      <ThemeProvider theme={defaultTheme}>
        <HomePage />
      </ThemeProvider>
    </>
  );
}

it('shows correct heading text', () => {
  renderWithProviders();

  const heading = screen.getByRole('heading', {
    name: /unlock your future Learn easy at Home/i,
  });

  expect(heading).toBeInTheDocument();
});
