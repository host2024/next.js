import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
    title: '포켓몬 도감 ',
    description: 'A simple Pokemon app with Next.js',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
            </head>
            <body>
                <div className="container mx-auto p-4">{children}</div>
            </body>
        </html>
    );
}
