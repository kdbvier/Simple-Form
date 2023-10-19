import styled from "styled-components";

export const Container = styled.div`
  .input_group {
    position: relative;
    margin-block: 10px;
    height: 40px;
    input {
      color: #413c5f;
      padding-left: 20px;
      border: none;
      height: 100%;
      width: 100%;
      font-size: 14px;
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: #c0bcdf;
      }
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }
  .icon_wrapper {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translate(0%, -50%);
    display: flex;
  }
`;

export const Error = styled.div<{ onError: boolean }>`
  ${({ onError }) => !onError && "visiability: hidden"};
  color: #da2121;
  font-size: 14px;
`;
