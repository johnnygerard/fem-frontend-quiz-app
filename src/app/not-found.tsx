import AppLink from "@/components/app-link";
import Text from "@/components/text";
import { Metadata } from "next";
import { memo } from "react";

export const metadata: Metadata = {
  title: "404 Not Found",
};

const NotFound = () => {
  return (
    <div className="space-y-4 text-center">
      <h1>
        <Text variant="xl-bold">404 Not Found</Text>
      </h1>
      <p>
        <Text>Sorry, the page you are looking for does not exist.</Text>
      </p>
      <AppLink
        href="/"
        className="inline-block transition-opacity hover:opacity-70"
      >
        <Text className="underline">Back to Home</Text>
      </AppLink>
    </div>
  );
};

export default memo(NotFound);
