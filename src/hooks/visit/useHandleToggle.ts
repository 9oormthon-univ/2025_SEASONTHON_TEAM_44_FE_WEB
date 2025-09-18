import { useState } from "react";

export const useHandleToggle = () => {
  const [toggleItem, setToggleItem] = useState<"daily" | "weekly">("daily");
  const handleToggleItem = (item: "daily" | "weekly") => {
    if (toggleItem === item) return;
    setToggleItem(item);
  };

  return { toggleItem, handleToggleItem };
}
