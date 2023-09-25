import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from '@/styles/theme/theme';
import HeroSection from '@/components/hero-section/hero-section';
import Header from '@/components/header/header';

export function renderHeroSectionWithProviders() {
  render(
    <ThemeProvider theme={theme}>
      <HeroSection />
    </ThemeProvider>
  );
}

export function renderHeaderWithProviders() {
  render(
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}
