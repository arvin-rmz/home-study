import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@/styles/global-style.styled';
import { myLocalRobotoFont } from '@/utils/helpers/get-local-fonts';
import { defaultTheme } from '@/styles/theme/default.theme';

const nextLocalRobotoFont = myLocalRobotoFont;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle localRobotoFont={nextLocalRobotoFont} />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}
