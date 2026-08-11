"use client";

import { ClientThemeProvider } from "@wrksz/themes/client";

export default function ThemeProviderWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClientThemeProvider
            defaultTheme="dark"
            attribute="class"
        >
            {children}
        </ClientThemeProvider>
    );
}