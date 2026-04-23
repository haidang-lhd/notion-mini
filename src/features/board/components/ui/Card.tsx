interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Card = ({ children, style }: Props) => {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "8px",
        padding: "10px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Card;