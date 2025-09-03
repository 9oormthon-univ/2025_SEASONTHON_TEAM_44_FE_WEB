import SearchBar from "@components/visit/SearchBar.tsx";
import styled from "@emotion/styled";
import * as React from "react";

interface VisitManagementHeaderProps {
  inputText: string;
  onChangeInputText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: () => void;
}

const VisitManagementHeader = ({ inputText, onSubmit, onChangeInputText }: VisitManagementHeaderProps) => {
  return (
    <VisitManagementSearchSection>
      <VisitManagementSearchSectionTitle>방문 · 적립 관리</VisitManagementSearchSectionTitle>
      <SearchBar value={inputText} onChange={onChangeInputText} onSubmit={onSubmit} />
    </VisitManagementSearchSection>
  );
};

export default VisitManagementHeader;

const VisitManagementSearchSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  gap: 160px;
`;

const VisitManagementSearchSectionTitle = styled.div`
  white-space: nowrap;
  min-width: fit-content;
  font: ${({ theme }) => theme.fonts.h3};
  color: ${({ theme }) => theme.colors.black};
`;
