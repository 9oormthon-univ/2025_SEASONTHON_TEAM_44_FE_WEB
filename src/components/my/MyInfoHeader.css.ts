import styled from "@emotion/styled";

const MyInfoHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const MyInfoProfileSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const MyInfoProfileImage = styled.img`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.grayScale.gray30};
  border-radius: 50%;
  border: none;
  object-fit: cover;
`;

const MyInfoProfileInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  div:first-of-type {
    font: ${({ theme }) => theme.fonts.sub1};
    color: ${({ theme }) => theme.colors.black};
  }

  div:last-of-type {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    font: ${({ theme }) => theme.fonts.body2};
    color: ${({ theme }) => theme.colors.grayScale.gray600};
  }

  img {
    width: 19px;
    height: 19px;
  }
`;

const MyInfoEditButton = styled.button`
  font: ${({ theme }) => theme.fonts.button2};
  padding: 6px 10px;
  background-color: ${({ theme }) => theme.colors.grayScale.gray50};
  color: ${({ theme }) => theme.colors.grayScale.gray500};
  border: none;
  border-radius: 12px;
  cursor: pointer;
  margin-bottom: auto;
`;

export { MyInfoHeaderContainer, MyInfoProfileSection, MyInfoProfileImage, MyInfoProfileInner, MyInfoEditButton };
