// Select.tsx
import { useEffect, useMemo, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { createPortal } from 'react-dom';

type Option = { value: string; label: string };
type SelectProps = {
  placeholder: string;
  options: Option[];
  value?: string | null;
  onChange?: (value: string | null) => void;
  disabled?: boolean;
};

const ReceiverSelector = ({ placeholder, options, value = null, onChange, disabled }: SelectProps) => {
  const [open, setOpen] = useState(false);
  const [hoverIdx, setHoverIdx] = useState<number>(-1);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);
  const [menuPos, setMenuPos] = useState<{ top: number; left: number; width: number }>({
    top: 0,
    left: 0,
    width: 310,
  });

  const selected = useMemo(() => options.find((o) => o.value === value) ?? null, [options, value]);

  useEffect(() => {
    setPortalRoot(document.body);
  }, []);

  // 위치 계산
  const updatePosition = () => {
    const btn = buttonRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    setMenuPos({
      top: rect.bottom + window.scrollY + 8,
      left: rect.left + window.scrollX,
      width: rect.width,
    });
  };

  useEffect(() => {
    if (open) {
      updatePosition();
      const onScrollOrResize = () => updatePosition();
      window.addEventListener('scroll', onScrollOrResize, true);
      window.addEventListener('resize', onScrollOrResize);
      return () => {
        window.removeEventListener('scroll', onScrollOrResize, true);
        window.removeEventListener('resize', onScrollOrResize);
      };
    }
  }, [open]);

  // 바깥 클릭
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (
        !buttonRef.current?.contains(e.target as Node) &&
        !listRef.current?.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [open]);

  // 키보드 내비게이션
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!open && (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ')) {
      setOpen(true);
      setHoverIdx(Math.max(0, options.findIndex((o) => o.value === value)));
      e.preventDefault();
      return;
    }
    if (!open) return;

    if (e.key === 'ArrowDown') {
      setHoverIdx((i) => (i + 1) % options.length);
      e.preventDefault();
    } else if (e.key === 'ArrowUp') {
      setHoverIdx((i) => (i - 1 + options.length) % options.length);
      e.preventDefault();
    } else if (e.key === 'Enter') {
      const opt = options[hoverIdx];
      if (opt) {
        onChange?.(opt.value);
        setOpen(false);
      }
      e.preventDefault();
    } else if (e.key === 'Escape') {
      setOpen(false);
      e.preventDefault();
    }
  };

  return (
    <Wrapper>
      <Trigger
        ref={buttonRef}
        type="button"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={onKeyDown}
      >
        <Placeholder $isEmpty={!selected}>{selected?.label ?? placeholder}</Placeholder>
        <Chevron $open={open} aria-hidden>
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </Chevron>
      </Trigger>

      {open &&
        portalRoot &&
        createPortal(
          <Menu
            ref={listRef}
            role="listbox"
            style={{ top: menuPos.top, left: menuPos.left, width: menuPos.width }}
          >
            {options.map((opt, idx) => (
              <MenuItem
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
              </MenuItem>
            ))}
          </Menu>,
          portalRoot,
        )}
    </Wrapper>
  );
};

export default ReceiverSelector;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 310px;
  gap: 8px;
`;

const Trigger = styled.button`
  padding: 20px;
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.black};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.grayScale.gray30};;
  border: none;
  outline: none;
  position: relative;
  text-align: left;
  transition: box-shadow 0.15s ease, background 0.15s ease;

  &:hover {
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Placeholder = styled.span<{ $isEmpty: boolean }>`
  color: ${({ $isEmpty, theme }) => ($isEmpty ? theme.colors.grayScale.gray200 : theme.colors.black)};
`;

const Chevron = styled.span<{ $open: boolean }>`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%) rotate(${({ $open }) => ($open ? '180deg' : '0deg')});
  transition: transform 0.15s ease;
  color: ${({ theme }) => theme.colors.black};
`;

const Menu = styled.div`
  position: absolute;
  z-index: 1000;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  border: 2px solid ${({ theme }) => theme.colors.grayScale.gray30};
  box-shadow: 0 5px 15px rgba(103, 18, 18, 0.25);
  overflow: hidden;
`;

const MenuItem = styled.div<{ $active?: boolean }>`
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.black};
  padding: 19px 0;
  text-align: center;
  cursor: pointer;
  user-select: none;
  border-top: 2px solid ${({ theme }) => theme.colors.grayScale.gray30};

  &:first-of-type {
    border-top: 0;
  }

  &[aria-selected='true'] {
    font-weight: 600;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
`;
