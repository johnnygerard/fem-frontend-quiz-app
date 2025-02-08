import NotFoundContent from "@/components/not-found-content";
import { Metadata } from "next";
import { memo } from "react";

export const metadata: Metadata = {
  title: "404 Not Found",
};

const NotFound = () => {
  return (
    <div className="grid min-h-screen place-items-center">
      <NotFoundContent />
    </div>
  );
};

export default memo(NotFound);
