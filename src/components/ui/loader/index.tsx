import { memo } from "react";

type LoaderType = {
  color?: string;
  size?: string;
  variant?: "loading-spinner" | "loading-ball";
  customClass?: string;
};

const Loader = ({ color = "grey", size = "md", variant, customClass }: LoaderType) => {
  const COLOR = `text-${color}`;
  const SIZE = `loading-${size}`;
  return (
    <>
      <span data-testid="loader" className={`loading ${SIZE} ${variant} ${COLOR} ${customClass}`} />
      Loading
    </>
  );
};

export default memo(Loader);
