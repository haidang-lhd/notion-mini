const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      style={{
        padding: "8px 12px",
        borderRadius: "6px",
        border: "none",
        background: "#2563eb",
        color: "white",
        cursor: "pointer",
        opacity: props.disabled ? 0.5 : 1,
        ...props.style,
      }}
    />
  );
};

export default Button;