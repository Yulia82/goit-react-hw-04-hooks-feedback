import styled from "@emotion/styled";

export const ContainerBtn = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Btn = styled.button`
  min-width: 90px;
  padding: 4px 20px;
  border-radius: 5px;
  border: none;
  background-color: #ffffff;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);

  font-weight: bold;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #7ab7f4;
    color: #ffffff;
  }
`;
