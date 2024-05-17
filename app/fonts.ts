import localFont from 'next/font/local'
import { Plus_Jakarta_Sans } from 'next/font/google'


export const drukWide = localFont({
    src: "./Druk-Wide-Bold.ttf",
    display: "swap",
  });

  export const plus_jakarta_sans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    display: 'swap',
  })

  export const messinaBook = localFont({
    src: "./MessinaSansMono-Book.ttf",
    display: "swap",
  });

  export const messinaSemiBold = localFont({
    src: "./MessinaSansMono-SemiBold.ttf",
    display: "swap",
  });