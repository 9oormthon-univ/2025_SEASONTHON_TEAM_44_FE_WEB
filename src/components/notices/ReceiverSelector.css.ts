import styled from "@emotion/styled";

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

export { Wrapper, Trigger, Placeholder, Chevron, Menu, MenuItem };
