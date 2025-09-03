export const menuItems = {
  dashboard: "대시보드",
  qrManagement: "QR관리",
  visitManagement: "방문 · 적립 관리",
  notices: "공지 · 메세지",
  myInfo: "내 정보",
};

export type MenuItem = keyof typeof menuItems;

export const menuItemList = Object.entries(menuItems);
