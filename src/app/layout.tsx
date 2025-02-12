import { loadTheme } from "@/app/actions";
import Background from "@/components/background-circles";
import Header from "@/components/header";
import AppRouterProvider from "@/providers/app-router-provider";
import ThemeProvider from "@/providers/theme-provider";
import { THEME } from "@/types/theme";
import { clsx } from "clsx";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { memo, ReactNode } from "react";

const rubik = Rubik({
  display: "swap",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: "variable",
});

const APP_NAME = "Frontend Quiz";
const DESCRIPTION = "Frontend Mentor challenge: Frontend Quiz app";

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: APP_NAME,
  },
  description: DESCRIPTION,
  icons: [
    {
      rel: "icon",
      sizes: "32x32",
      type: "image/png",
      url: "/images/favicon-32x32.png",
    },
  ],
  openGraph: {
    type: "website",
    url: "https://example.com/placeholder",
    siteName: APP_NAME,
    title: APP_NAME,
    description: DESCRIPTION,
  },
};

type Props = Readonly<{
  children: ReactNode;
}>;

const RootLayout = async ({ children }: Props) => {
  const theme = await loadTheme();

  return (
    <html
      data-theme={theme === THEME.SYSTEM ? null : theme}
      className={clsx(
        rubik.variable,
        "font-sans leading-none font-normal not-italic antialiased",
        "text-dark-navy dark:text-white",
      )}
      lang="en-US"
    >
      <body
        className={clsx(
          "dt:py-20 dt:px-35 tb:py-10 tb:px-16 px-6 py-4",
          "bg-light-grey dark:bg-dark-navy min-h-screen",
        )}
      >
        <AppRouterProvider>
          <ThemeProvider initialTheme={theme}>
            <Background />
            <Header />
            <main>{children}</main>
          </ThemeProvider>
        </AppRouterProvider>
        <noscript>
          <div
            style={{
              position: "fixed",
              zIndex: 1000,
              top: 0,
              left: 0,
              right: 0,
              padding: "1rem",
              backgroundColor: "#fff4f4",
              color: "#d32f2f",
              borderBottom: "2px solid currentColor",
              textAlign: "center",
            }}
            role="alert"
          >
            <p>
              JavaScript is required for this website to function properly.
              Please ensure that it is supported and enabled in your browser
              settings.
              <br />
              To learn more, check out{" "}
              <a
                style={{ textDecorationLine: "underline", color: "LinkText" }}
                href="https://enable-javascript.com/"
              >
                How to enable JavaScript in your browser
              </a>
              .
            </p>
          </div>
        </noscript>
      </body>
    </html>
  );
};

export default memo(RootLayout);
