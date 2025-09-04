import { useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import * as S from '@components/notices/ReceiverSelector.css.ts';
import { type Option, useHandleSelector } from "@hooks/notices/useHandleSelector.ts";
import { useDropdownPosition } from "@hooks/notices/useDropdownPosition.ts";
import * as React from "react";

type SelectProps = {
  placeholder: string;
  options: Option[];
  value?: string | null;
  onChange?: (value: string | null) => void;
  disabled?: boolean;
};

const ReceiverSelector = ({ placeholder, options, value = null, onChange, disabled }: SelectProps) => {
  const { setOpen, open, onKeyDown, hoverIdx, setHoverIdx } = useHandleSelector(options);
  const buttonRef = useRef<HTMLElement>(null);
  const { menuRef, menuStyle, portalRoot } = useDropdownPosition(open, buttonRef as React.RefObject<HTMLElement>);
  const selected = useMemo(() => options.find((o) => o.value === value) ?? null, [options, value]);

  // 컴포넌트 외부 클릭 시 닫기 위한 Effect
  useEffect(() => {
    if (!open) return;

    const onClickOutside = (e: MouseEvent) => {
      if (
        !buttonRef.current?.contains(e.target as Node) &&
        !menuRef.current?.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [open, setOpen, menuRef]);

  // 키보드 내비게이션

  return (
    <S.Wrapper>
      <S.Trigger
        ref={buttonRef as React.RefObject<HTMLButtonElement>}
        type="button"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={(e) => onKeyDown(e, value, onChange)}
      >
        <S.Placeholder $isEmpty={!selected}>{selected?.label ?? placeholder}</S.Placeholder>
        <S.Chevron $open={open} aria-hidden>
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </S.Chevron>
      </S.Trigger>

      {open &&
        portalRoot &&
        createPortal(
          <S.Menu
            ref={menuRef}
            role="listbox"
            style={menuStyle}
          >
            {options.map((opt, idx) => (
              <S.MenuItem
                key={opt.value}
                role="option"
                aria-selected={opt.value === value}
                onMouseEnter={() => setHoverIdx(idx)}
                onMouseDown={(e) => {
                  e.preventDefault();
                  onChange?.(opt.value);
                  setOpen(false);
                }}
                $active={idx === hoverIdx}
              >
                {opt.label}
              </S.MenuItem>
            ))}
          </S.Menu>,
          portalRoot,
        )}
    </S.Wrapper>
  );
};

export default ReceiverSelector;
