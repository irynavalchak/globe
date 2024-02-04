import {Inter, Montserrat, Libre_Franklin} from 'next/font/google';

export const inter = Inter({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--inter-font'
})
export const montserrat = Montserrat({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--montserrat-font'
});

export const libreFranklin = Libre_Franklin({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--libreFranklin-font'
});
