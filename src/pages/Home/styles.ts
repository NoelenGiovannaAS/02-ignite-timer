import { styled } from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  border: 0;

  font-weight: bold;
  cursor: pointer;
  color: ${(props) => props.theme["gray-100"]};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const StartButton = styled(Button)`
  background: ${(props) => props.theme["green-500"]};

  &:not(:disabled):hover {
    background: ${(props) => props.theme["green-700"]};
  }
`;

export const StopButton = styled(Button)`
  background: ${(props) => props.theme["red-500"]};

  &:not(:disabled):hover {
    background: ${(props) => props.theme["red-700"]};
  }
`;
