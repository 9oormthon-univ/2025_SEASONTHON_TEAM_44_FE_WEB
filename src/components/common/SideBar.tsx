import { type MenuItem, menuItemList } from "@/types/sideBar.ts";
import { sideBarStore } from "@stores/sideBarStore.ts";
import * as S from "@components/common/Sidebar.css.ts";

const SideBar = () => {
  const { actions } = sideBarStore();
  const { setCurrentItem, isActive } = actions;

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
