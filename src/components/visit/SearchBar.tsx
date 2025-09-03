import IcSearch from "@icon/ic-search.svg";
import styled from "@emotion/styled";
import * as React from "react";

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: () => void;
}

const SearchBar = ({ value, onChange, onSubmit }: SearchBarProps) => {
  return (
    <SearchBarContainer>
      <SearchInput
        type="text"
        placeholder="이름, 연락처로 검색"
        value={value}
        onChange={onChange}
        onKeyDown={(e) => e.key === 'Enter' && onSubmit && onSubmit()}
      />
      <img src={IcSearch} alt="" />
    </SearchBarContainer>
  );
};

export default SearchBar;

const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 20px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.grayScale.gray30};
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.black};
  font: ${({ theme }) => theme.fonts.body1};
  background-color: transparent;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayScale.gray200};
  }
`;
