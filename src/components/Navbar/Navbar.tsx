import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { avatar } from "@/data/assets";
import { useAppContext } from "@/contexts/useProviders";

import {
  Menu,
  ChatLeft,
  ShoppingCartFi,
  KeyboardArrowDown,
  Notification as NotificationIcon,
} from "@/components/Layouts/Icons";
import { NavButton } from "./components";
import { UserProfile } from "@/components";
import { Cart, Chat, Notification } from "@/components/Layouts";

const Navbar: React.FC = () => {
  const {
    currentColor,
    toggleSidebar,
    navbarSidebarsState,
    handleNavbarSidebarsState,
  } = useAppContext();

  return (
    <div className="sticky top-0 left-0 right-0 bg-main-bg dark:bg-main-dark-bg navbar w-full">
      <div className="flex items-center justify-between p-2 md:mx-6 relative">
        <NavButton
          title="Menu"
          color={currentColor}
          dotColor={currentColor}
          Icon={<Menu />}
          onClick={() => toggleSidebar()}
        />

        <div className="flex items-center gap-4">
          <NavButton
            title="Cart"
            color={currentColor}
            Icon={<ShoppingCartFi className="text-2xl leading-none" />}
            onClick={() => handleNavbarSidebarsState("cart")}
          />

          <NavButton
            title="Chat"
            color={currentColor}
            dotColor={currentColor}
            Icon={<ChatLeft />}
            onClick={() => handleNavbarSidebarsState("chat")}
          />

          <NavButton
            title="Notification"
            color={currentColor}
            dotColor="rgb(254, 201, 15)"
            Icon={<NotificationIcon />}
            onClick={() => handleNavbarSidebarsState("notifications")}
          />

          <TooltipComponent content="profile" position="BottomCenter">
            <div
              className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
              onClick={() => handleNavbarSidebarsState("userProfile")}
            >
              <img src={avatar} alt="user" className="rounded-full w-8 h-8" />

              <p>
                <span className="text-gray-400 text-14">Hi, </span>
                &nbsp;
                <span className="text-gray-400 font-bold ml-1 text-14">
                  Michael
                </span>
              </p>

              <KeyboardArrowDown />
            </div>
          </TooltipComponent>

          {navbarSidebarsState.cart && <Cart />}
          {navbarSidebarsState.chat && <Chat />}
          {navbarSidebarsState.notifications && <Notification />}
          {navbarSidebarsState.userProfile && <UserProfile />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
