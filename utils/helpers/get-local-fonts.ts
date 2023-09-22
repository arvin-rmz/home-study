import localFont from 'next/font/local';

export const myLocalRobotoFont = localFont({
  src: [
    {
      path: '../../public/fonts/roboto/Roboto-Thin.ttf',
      weight: '100',
    },
    {
      path: '../../public/fonts/roboto/Roboto-Light.ttf',
      weight: '300',
    },
    {
      path: '../../public/fonts/roboto/Roboto-Regular.ttf',
      weight: '400',
    },
    {
      path: '../../public/fonts/roboto/Roboto-Medium.ttf',
      weight: '500',
    },
    {
      path: '../../public/fonts/roboto/Roboto-Bold.ttf',
      weight: '700',
    },
    {
      path: '../../public/fonts/roboto/Roboto-Black.ttf',
      weight: '900',
    },
  ],
});
