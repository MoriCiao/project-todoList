import { useContext } from "react";
import { UIContext } from "./UIContext";
import Flatpickr from "react-flatpickr";

// const UICtx = useContext(UIContext);

export const NewtodoLabel = ({ htmlFor, name, className }) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {name}
    </label>
  );
};

export const NewtodoInput = ({
  type,
  name,
  id,
  placeholder,
  className,
  onChange,
  value,
  ref,
  maxLength,
}) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
      value={value}
      ref={ref}
      maxLength={maxLength}
    />
  );
};

export const NewtodoDate = ({
  name,
  placeholder,
  className,
  onChange,
  value,
}) => {
  const UICtx = useContext(UIContext);

  return (
    <Flatpickr
      value={value}
      // 需要釐清
      onChange={([date]) =>
        onChange({
          target: { value: date },
        })
      }
      //
      options={{
        enableTime: true,
        dateFormat: "m-d H:i",
        time_24hr: true,
        allowInput: true,
      }}
      className={`${className} ${
        UICtx.theme
          ? "bg-[--dark-component-y] text-[--dark-text-y] placeholder-[--dark-text-y]"
          : "bg-[--light-component-y] text-[--light-text-y] placeholder-[--light-text-y]"
      }`}
      name={name}
      id={name}
      placeholder={placeholder}
    />
  );
};

export const NewtodoTextArea = ({
  maxlength,
  rows,
  placeholder,
  className,
  onChange,
  value,
}) => {
  return (
    <textarea
      maxLength={maxlength}
      rows={rows}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
      value={value}
    ></textarea>
  );
};
