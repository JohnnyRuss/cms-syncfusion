type ButtonT = {
  color?: string;
  bgColor?: string;
  size?: number;
  borderRadius?: number;
  text: string;
  onClick: () => void;
};

const Button: React.FC<ButtonT> = ({
  bgColor,
  borderRadius,
  color,
  text,
  size,
  onClick,
}) => {
  const btnSize = size ? `${size}px` : "18px";
  const btnColor = color ? color : "#fff";
  const btnBgColor = bgColor ? bgColor : "corneflowerblue";
  const btnRadius = borderRadius ? `${borderRadius}px` : "12px";

  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        color: btnColor,
        fontSize: btnSize,
        borderRadius: btnRadius,
        backgroundColor: btnBgColor,
      }}
      className={`${btnSize} ${btnBgColor} ${btnRadius} ${btnColor} p-3 hover:drop-shadow-xl transition-all duration-200`}
    >
      {text}
    </button>
  );
};

export default Button;
