import styled from "styled-components";

export const SelectorContainer = styled.div`
  position: relative;
  width: 100%;
  margin-block: 10px;
`;

export const SelectorContent = styled.div`
  height: 40px;
  background: white;
  width: 100%;
  position: relative;
  padding-inline: 20px 60px;
  cursor: pointer;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  .selector_content {
    font-size: 14px;
    color: #413c5f;
    width: 100%;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translate(0%, -50%);
  display: flex;
`;

export const ItemList = styled.div`
  margin-top: 1px;
  width: 100%;
  max-height: 200px;
  background: white;
  display: flex;
  flex-direction: column;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #dbd7ee;
    height: 60px;
    border-radius: 2px;
  }
`;

export const Item = styled.div<{ isOdd: boolean; isActive: boolean }>`
  background: ${({ isOdd }) => (isOdd ? "#F6F4FF" : "white")};
  font-weight: ${({ isActive }) => (isActive ? "700" : "300")};
  padding: 12px 16px;
  cursor: pointer;
  &:hover {
    background: #f6f4ff;
  }
`;
