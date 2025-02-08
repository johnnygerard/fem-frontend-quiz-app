"use client";
import { memo } from "react";
import { Link, LinkProps } from "react-aria-components";

const AppLink = (props: LinkProps) => <Link {...props} />;

export default memo(AppLink);
