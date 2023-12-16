import type { ChangeEvent, InputHTMLAttributes } from "react";
import { forwardRef } from "react";

import { SETTINGS } from "../../../lib/settings";
import FormControl from "../formControl";

type ItemType = {
  value: string;
  label: string;
} & Record<string, unknown>;

type MyComponentProps = InputHTMLAttributes<HTMLSelectElement> & {
  value?: string;
  fieldLabel?: string;
  className?: string;
  options: ReadonlyArray<{ label: string; value: string }>;
};

const Select = forwardRef<HTMLSelectElement, MyComponentProps>(function Select(
  { options, fieldLabel, onChange, ...props },
  ref,
) {
  const generateSingleOptions = () => {
    return options.map((item: ItemType) => {
      return (
        <option data-testid="option" key={item.value} value={item.value}>
          {item.label}
        </option>
      );
    });
  };
  return (
    <FormControl fieldLabel={fieldLabel}>
      <select
        data-testid="select"
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
          if (onChange) {
            onChange(e);
          }
        }}
        {...props}
        ref={ref}
        className={`select select-bordered rounded-md select-${SETTINGS.inputSize} w-full`}
      >
        {generateSingleOptions()}
      </select>
    </FormControl>
  );
});

export default Select;
