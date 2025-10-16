import React from "react";

interface IDateInput extends React.ComponentProps<"input"> {
  label: string;
  id: string;
}
const generalStyle: React.CSSProperties = {
  color: "var(--color-2)",
  padding: "var(--gap-s) .75rem",
  backgroundColor: "var(--color-4)",
  borderRadius: "var(--gap)",
};
const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "var(--gap-s)",
  fontWeight: "1rem",
  ...generalStyle,
};

const inputStyle: React.CSSProperties = {
  border: "none",
  fontFamily: "monospace",
  ...generalStyle,
};

const DateInput = ({ label, id, ...props }: IDateInput) => {
  return (
    <div>
      <label style={labelStyle} htmlFor={id}>
        {label}
      </label>
      <input style={inputStyle} id={id} name={id} type="date" {...props} />
    </div>
  );
};

export default DateInput;
