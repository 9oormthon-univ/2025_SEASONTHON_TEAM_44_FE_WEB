import styled from "@emotion/styled";

const MyStoreInfoImageSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font: ${({ theme }) => theme.fonts.body1};

  div:first-of-type {
    color: ${({ theme }) => theme.colors.black};
  }

  div:last-of-type {
    color: ${({ theme }) => theme.colors.grayScale.gray400};
  }

  img {
    width: 362px;
    height: 190px;
    background-color: ${({ theme }) => theme.colors.grayScale.gray30};
    border-radius: 12px;
    object-fit: cover;
    border: none;
  }
`;

const MyStoreInfoInfoSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;

  @media (max-width: 1200px) {
    gap: 30px;
  }
`;

const MyStoreInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.black};

  div:last-of-type {
    padding: 20px;
    width: 362px;
    background-color: ${({ theme }) => theme.colors.grayScale.gray30};
    border-radius: 12px;
    border: none;
    outline: none;
  }
`;

export { MyStoreInfoImageSection, MyStoreInfoInfoSection, MyStoreInfoItem };
