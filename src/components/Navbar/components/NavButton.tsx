import { TooltipComponent } from "@syncfusion/ej2-react-popups";

type NavButtonT = {
  title: string;
  color: string;
  dotColor?: string;
  onClick: () => void;
  Icon: React.ReactNode;
};

const NavButton: React.FC<NavButtonT> = ({
  color,
  dotColor,
  Icon,
  onClick,
  title,
}) => {
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        type="button"
        onClick={onClick}
        style={{ color }}
        className="relative rounded-full text-xl p-3 hover:bg-light-gray"
      >
        {Icon}
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
      </button>
    </TooltipComponent>
  );
};

export default NavButton;
