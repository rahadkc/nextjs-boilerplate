import type { InputHTMLAttributes } from "react";
import { forwardRef } from "react";

import { SETTINGS } from "@/lib/settings";

import FormControl from "../formControl";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  fieldLabel?: string;
  type?: "number" | "text" | "submit" | "email" | "password" | "reset";
  value?: string;
  customClass?: string;
  hasError?: boolean;
};

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(function InputField(
  { type = "text", customClass, hasError, fieldLabel, ...rest },
  ref,
) {
  const SIZE = `input-${SETTINGS.inputSize}`;

  return (
    <FormControl fieldLabel={fieldLabel}>
      <input
        data-testid="inputfield"
        type={type}
        className={`input input-bordered ${SIZE} rounded-md w-full ${
          hasError ? "input-error" : ""
        } ${customClass}`}
        {...rest}
        ref={ref}
      />
    </FormControl>
  );
});

export default InputField;
