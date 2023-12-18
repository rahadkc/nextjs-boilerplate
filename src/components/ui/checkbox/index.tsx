import type { InputHTMLAttributes } from "react";
import { forwardRef } from "react";

import FormControl from "../formControl";

type MyComponentProps = InputHTMLAttributes<HTMLInputElement> & {
  value?: string;
  label?: string;
  fieldLabel?: string;
  className?: string;
  checked?: boolean;
  placeholder?: string;
};

// const Checkbox = forwardRef<HTMLInputElement, MyComponentProps>((
//   { label, placeholder, fieldLabel, ...props },
//   ref
// ) => (
//     <FormControl fieldLabel={fieldLabel}>
//       <label className="cursor-pointer auto-column-grid">
//         <input type="checkbox" className="checkbox" placeholder={placeholder} {...props} ref={ref} />
//         <span className="label-text font-bold">{label}</span>
//       </label>
//     </FormControl>
//   ));

const Checkbox = forwardRef<HTMLInputElement, MyComponentProps>(
  ({ label, placeholder, fieldLabel, ...props }, ref) => (
    <FormControl fieldLabel={fieldLabel}>
      <label htmlFor="checkbox" className="cursor-pointer auto-column-grid">
        <input
          type="checkbox"
          className="checkbox"
          placeholder={placeholder}
          {...props}
          ref={ref}
        />
        <span className="label-text font-bold">{label}</span>
      </label>
    </FormControl>
  ),
);

Checkbox.displayName = "Checkbox";
export default Checkbox;
