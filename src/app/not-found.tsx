import AppLink from "@/components/app-link";
import { Metadata } from "next";
import { memo } from "react";

export const metadata: Metadata = {
  title: "404 Not Found",
};

const NotFound = () => {
  return (
    <div className="grid min-h-screen place-items-center">
      <div className="text-center">
        <h1>404 Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <AppLink href="/">Back to Home</AppLink>
      </div>
    </div>
  );
};

export default memo(NotFound);
