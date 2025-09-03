import { type MenuItem, menuItemList } from "@/types/sideBar.ts";
import { sideBarStore } from "@stores/sideBarStore.ts";
import * as S from "@components/common/Sidebar.css.ts";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const SideBar = () => {
  const { currentItem, actions } = sideBarStore();
  const { setCurrentItem, isActive } = actions;
  const navigate = useNavigate();

  useEffect(() => {
    const navigateTo = (menuItem: MenuItem) => {
      switch (menuItem) {
        case "dashboard":
          navigate("/dashboard");
          break;
        case "qrManagement":
          navigate("/qr-management");
          break;
        case "visitManagement":
          navigate("/visit-management");
          break;
        case "notices":
          navigate("/notices");
          break;
        case "myInfo":
          navigate("/my-info");
          break;
      }
    };
    navigateTo(currentItem);
  }, [currentItem, navigate, setCurrentItem]);

  return (
    <S.SideBarContainer>
      {menuItemList.map(([key, value]) => (
        <S.SideBarMenuItem
          key={key}
          onClick={() => setCurrentItem(key as MenuItem)}
          isActive={isActive(key as MenuItem)}>{value}
        </S.SideBarMenuItem>
      ))}
    </S.SideBarContainer>
  );
};

export default SideBar;
