import type { ReactNode } from "react";
import { memo } from "react";

type BooleanWrapperType = {
  children: ReactNode;
  shouldRender: boolean;
};
const BooleanWrapper = ({ shouldRender, children }: BooleanWrapperType) => {
  if (!shouldRender) return null;
  return children;
};

export default memo(BooleanWrapper);
