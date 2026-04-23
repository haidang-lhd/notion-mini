
const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      style={{
        padding: "8px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        outline: "none",
        ...props.style,
      }}
    />
  );
};

export default Input;