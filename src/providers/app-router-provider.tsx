/**
 * @file Context provider for client-side routing with React Aria.
 * @see https://react-spectrum.adobe.com/react-aria/routing.html#nextjs
 */
"use client";
import { useRouter } from "next/navigation";
import { memo, ReactNode } from "react";
import { RouterProvider } from "react-aria-components";

declare module "react-aria-components" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

type Props = Readonly<{
  children: ReactNode;
}>;

const AppRouterProvider = ({ children }: Props) => {
  const router = useRouter();

  return <RouterProvider navigate={router.push}>{children}</RouterProvider>;
};

export default memo(AppRouterProvider);
