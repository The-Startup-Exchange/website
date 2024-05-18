import localFont from 'next/font/local'
import { Plus_Jakarta_Sans } from 'next/font/google'

export const plus_jakarta_sans_regular = Plus_Jakarta_Sans({
    weight: '400',  // Regular
    subsets: ['latin'],
    display: 'swap',
});

export const plus_jakarta_sans_medium = Plus_Jakarta_Sans({
    weight: '500',  // Medium
    subsets: ['latin'],
    display: 'swap',
});

export const plus_jakarta_sans_semibold = Plus_Jakarta_Sans({
    weight: '600',  // Semibold
    subsets: ['latin'],
    display: 'swap',
});

export const plus_jakarta_sans_bold = Plus_Jakarta_Sans({
    weight: '700',  // Bold
    subsets: ['latin'],
    display: 'swap',
});

export const plus_jakarta_sans_extrabold = Plus_Jakarta_Sans({
    weight: '800',  // Extra Bold
    subsets: ['latin'],
    display: 'swap',
});

export const druk_wide = localFont({
    src: "../../public/fonts/Druk-Wide-Bold.ttf",
    display: "swap",
});

export const messina_book = localFont({
  src: "../../public/fonts/MessinaSansMono-Book.ttf",
  display: "swap",
});

export const messina_semibold = localFont({
  src: "../../public/fonts/MessinaSansMono-SemiBold.ttf",
  display: "swap",
});