import styled from "styled-components";

export const AppContainer = styled.div`
  box-sizing: border-box;
  background: url("/images/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  padding: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .header {
    color: #413c5f;
    font-family: Inter;
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  p {
    color: #817ca5;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-block: 17px;
  }
`;

export const FormContainer = styled.div`
  width: 400px;
  border-radius: 20px;
  padding: 40px 20px;
  background: #817ca5;
  margin-top: 40px;
  label {
    color: white;
    font-size: 14px;
  }
`;

export const Button = styled.button<{ disabled?: boolean }>`
  background: ${({ disabled }) => (disabled ? "#A39FC1" : "white")};
  color: ${({ disabled }) => (disabled ? "#8B85B1" : "#413C5F")};
  height: 60px;
  width: 100%;
  border-radius: 4px;
  font-size: 24px;
  cursor: pointer;
  border: none;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ResultContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 14px;
  .title {
    color: #cecaeb;
  }
  .content {
    color: white;
  }
`;

export const Sidebar = styled.div`
  position: absolute;
  top: 200px;
  left: 80px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SidebarItem = styled.div<{ active: boolean }>`
  display: flex;
  gap: 5px;
  align-items: center;
  .check {
    width: 16px;
    height: 16px;
    background-color: ${({ active }) => (active ? "#5845DD" : "#87839F")};
    border-radius: 2px;
  }
  p {
    font-size: 14px;
    color: #817ca5;
  }
`;
