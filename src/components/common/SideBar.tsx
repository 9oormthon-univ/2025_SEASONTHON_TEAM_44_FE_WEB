import { type MenuItem, menuItemList } from "@/types/sideBar.ts";
import { sideBarStore } from "@stores/sideBarStore.ts";
import * as S from "@components/common/Sidebar.css.ts";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import IcSidebarDashboard from "@icon/ic-sidebar-dashboard.tsx";
import IcSidebarQR from "@icon/ic-sidebar-qr.tsx";
import IcSidebarVisit from "@icon/ic-sidebar-visit.tsx";
import IcSidebarNotice from "@icon/ic-sidebar-notice.tsx";
import IcSidebarCoupon from "@icon/ic-sidebar-coupon.tsx";
import IcSidebarMyInfo from "@icon/ic-sidebar-my-info.tsx";

const getMenuIcon = (menuItem: MenuItem, currentItem: MenuItem) => {
  switch (menuItem) {
    case "dashboard":
      return <IcSidebarDashboard isActive={currentItem === "dashboard"} />
    case "qrManagement":
      return <IcSidebarQR isActive={currentItem === "qrManagement"} />
    case "visitManagement":
      return <IcSidebarVisit isActive={currentItem === "visitManagement"} />
    case "notices":
      return <IcSidebarNotice isActive={currentItem === "notices"} />
    case "coupon":
      return <IcSidebarCoupon isActive={currentItem === "coupon"} />
    case "myInfo":
      return <IcSidebarMyInfo isActive={currentItem === "myInfo"} />
    default:
      return <IcSidebarDashboard isActive={currentItem === "dashboard"} />
  }
}

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
        case "coupon":
          navigate("/coupon");
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
          isActive={isActive(key as MenuItem)}>
          {getMenuIcon(key as MenuItem, currentItem)}
          <div>{value}</div>
        </S.SideBarMenuItem>
      ))}
    </S.SideBarContainer>
  );
};

export default SideBar;
