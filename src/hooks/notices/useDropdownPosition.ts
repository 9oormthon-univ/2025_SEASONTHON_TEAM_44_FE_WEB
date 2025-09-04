import { type RefObject, useEffect, useRef, useState } from "react";
import * as React from "react";

/**
 * 드롭다운 메뉴의 위치와 생명주기를 관리하는 훅입니다.
 * 트리거(버튼)를 기준으로 메뉴 위치를 계산하고, 외부 클릭 시 닫히도록 하며,
 * 스크롤이나 창 크기 변경 시 위치를 업데이트합니다.
 * @param isOpen - 드롭다운이 열려있는지 여부를 나타내는 boolean 값.
 * @param triggerRef - 드롭다운을 열리게 하는 요소(버튼 등)의 ref.
 * @returns 메뉴의 ref와 메뉴 요소에 적용할 props 객체를 반환합니다.
 */

export const useDropdownPosition = <T extends HTMLElement> (isOpen: boolean, triggerRef: RefObject<T>) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);
  const [menuStyle, setMenuStyle] = useState<React.CSSProperties>({
    top: 0,
    left: 0,
    width: 310,
  });

  useEffect(() => {
    setPortalRoot(document.body);
  }, []);

  // 메뉴가 열리거나 윈도우가 스크롤/리사이즈될 때 위치 업데이트
  useEffect(() => {
    if (!isOpen || !triggerRef?.current) return;

    const updatePosition = () => {
      const btn = triggerRef.current;
      if (!btn) return;

      const rect = btn.getBoundingClientRect();
      setMenuStyle({
        position: 'absolute',
        top: `${rect.bottom + window.scrollY + 8}px`,
        left: `${rect.left + window.scrollX}px`,
        width: `${rect.width}px`,
      });
    };

    updatePosition(); // 초기 위치 계산

    window.addEventListener('scroll', updatePosition, true);
    window.addEventListener('resize', updatePosition);

    return () => {
      window.removeEventListener('scroll', updatePosition, true);
      window.removeEventListener('resize', updatePosition);
    };
  }, [isOpen, triggerRef]);

  return { menuRef, menuStyle, portalRoot };
};
