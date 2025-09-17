import { useContext } from "react";
import Flatpickr from "react-flatpickr";
import { UIContext } from "../../contexts/UIContext";
import { motion } from "framer-motion";
export const NewtodoLabel = ({ type, htmlFor, name }) => {
  const UICtx = useContext(UIContext);
  function label_style(type) {
    if (type === "date") {
      return `text-start text-[1.2rem] col-span-1 col-start-1 ${UICtx.p_size} ${
        UICtx.theme ? "text-[--dark-text-y]" : "text-[--light-text-y]"
      }`;
    } else {
      return `p-4 font-[Istok Web] text-center mt-4 ${UICtx.p_size} ${
        UICtx.theme ? "text-[--dark-text-y]" : "text-[--light-text-y]"
      }`;
    }
  }

  return (
    <label htmlFor={htmlFor} className={label_style(type)}>
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

export const NewtodoDate = ({ name, placeholder, onChange, value }) => {
  const UICtx = useContext(UIContext);

  return (
    <Flatpickr
      value={value}
      onChange={([date]) =>
        onChange({
          target: { value: date },
        })
      }
      options={{
        enableTime: true,
        dateFormat: "m-d H:i",
        time_24hr: true,
        allowInput: true,
      }}
      className={`InputItem col-span-4 col-start-2 h-[3rem] w-[15rem] rounded border-0 p-2 ${
        UICtx.p_size
      } ${
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
  const UICtx = useContext(UIContext);
  return (
    <textarea
      maxLength={maxlength}
      rows={rows}
      placeholder={placeholder}
      className={`InputItem h-40 w-[20rem] resize-none rounded border-0 p-2 ${
        UICtx.p_size
      } ${
        UICtx.theme
          ? "bg-[--dark-component-y] text-[--dark-text-y] placeholder-[--dark-text-y]"
          : "bg-[--light-component-y] text-[--light-text-y] placeholder-[--light-text-y]"
      } border border-red-500`}
      onChange={onChange}
      value={value}
    ></textarea>
  );
};

export const SubmitBtn = ({ type, onClick, text }) => {
  const UICtx = useContext(UIContext);
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      type={type}
      onClick={onClick}
      className={`h-auto w-[10rem] rounded-full ${
        UICtx.theme ? "bg-[--dark-component-y]" : "bg-[--light-component-y]"
      }`}
    >
      <p
        className={`w-full text-center font-['Luckiest_Guy'] leading-tight ${
          UICtx.h3_size
        } ${UICtx.theme ? "text-[--dark-text-y]" : "text-[--light-text-y]"}`}
      >
        {text}
      </p>
    </motion.button>
  );
};
