import type React from "react";
import * as icons from "./all-icons.tsx";
import { cn } from "../../../lib/utils";

export type IconName = keyof typeof icons;

export type IconProps = {
  name: IconName;
  className?: string;
} & React.ComponentProps<"svg">;

export const Icon = ({ name, className, ...rest }: IconProps): JSX.Element => {
  const IconComponent = icons[name];
  return <IconComponent className={cn("size-[1em]", className)} {...rest} />;
};
