"use client";
import { memo } from "react";
import { Link } from "react-aria-components";

const NotFoundContent = () => {
  return (
    <div className="text-center">
      <h1>404 Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href="/">Back to Home</Link>
    </div>
  );
};

export default memo(NotFoundContent);
