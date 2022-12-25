// import React from 'react';
// import type { DecoratorFn } from '@storybook/react';
// import { ThemeProvider, convert, themes } from '@storybook/theming';

// export const parameters = {
//   actions: { argTypesRegex: '^on[A-Z].*' }
// };

// export const decorators: DecoratorFn[] = [
//   (StoryFn, { globals: { locale } }) => (
//     <>
//       <div>Locale: {locale}</div>
//       <StoryFn />
//     </>
//   ),
//   (StoryFn) => (
//     <ThemeProvider theme={convert(themes.light)}>
//       <StoryFn />
//     </ThemeProvider>
//   ),
// ];

// export const globalTypes = {
//   locale: {
//     name: 'Locale',
//     description: 'Internationalization locale',
//     defaultValue: 'en',
//     toolbar: {
//       icon: 'globe',
//       items: [
//         { value: 'en', right: '🇺🇸', title: 'English' },
//         { value: 'ru', right: '🇷🇺', title: 'Русский' },
//       ],
//     },
//   },
// };
