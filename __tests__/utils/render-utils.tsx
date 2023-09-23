import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '@/styles/theme/default.theme';
import HeroSection from '@/components/hero-section/hero-section';

export function renderHeroSectionWithProviders() {
  render(
    <ThemeProvider theme={defaultTheme}>
      <HeroSection />
    </ThemeProvider>
  );
}
