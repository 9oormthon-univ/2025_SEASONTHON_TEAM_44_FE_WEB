import { useState } from "react";
import * as React from "react";

export type Option = { value: string; label: string };

export const useHandleSelector = (options: Option[]) => {
  const [open, setOpen] = useState(false);
  const [hoverIdx, setHoverIdx] = useState<number>(-1);

  const onKeyDown = (e: React.KeyboardEvent, value: string | null, onChange?: (value: string | null) => void) => {
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

  return { open, setOpen, onKeyDown, hoverIdx, setHoverIdx }
}
