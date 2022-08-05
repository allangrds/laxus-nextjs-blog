import { Global } from '@emotion/react'

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        src: url('./fonts/Inter-Regular.ttf');
      }
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        src: url('./fonts/Inter-Medium.ttf');
      }
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        src: url('./fonts/Inter-SemiBold.ttf');
      }
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        src: url('./fonts/Inter-Bold.ttf');
      }
    `}
  />
)