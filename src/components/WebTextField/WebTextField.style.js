import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 20px;
  margin-top: 20px;
`;

//----------------------------------------------------------

export const Label1 = styled.label`
  font-size: 0.75rem;
  font-weight: 500;
  color: #797979;

  margin-top: 20px;
`;

export const InputBox1 = styled.input`
  width: 19.75rem;
  height: 3rem;

  outline: none;
  border-width: 0rem 0rem 0.125rem 0rem;

  font-size: 0.75rem;
  font-weight: 500;

  padding-inline-start: 0.75rem;
  padding-inline-end: 2.625rem;

  margin-top: 0.063rem;

  &::placeholder {
    color: #d9d9d9;
    font-size: 0.875rem;
    font-weight: 500;
  }
`;

export const InputBox1Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const InputBoxDeleteImg = styled.img`
  position: absolute;

  width: 1.125rem;
  height: 1.125rem;

  top: 50%;
  right: 0.938rem;
  transform: translateY(-50%);

  cursor: pointer;
`;

//----------------------------------------------------------------

export const errorTextLabel1 = styled.label`
  font-size: 0.75rem;
  font-weight: 500;
  color: #f44355;

  margin-top: 20px;
`;

export const errorInputBox1 = styled.input`
  width: 19.75rem;
  height: 3rem;

  outline: none;
  border-width: 0rem 0rem 0.125rem 0rem;
  border-color: #f44355;

  font-size: 0.75rem;
  font-weight: 500;

  padding-inline-start: 0.75rem;
  padding-inline-end: 2.625rem;

  margin-top: 0.063rem;

  &::placeholder {
    color: #d9d9d9;
    font-size: 0.875rem;
    font-weight: 500;
  }
`;
