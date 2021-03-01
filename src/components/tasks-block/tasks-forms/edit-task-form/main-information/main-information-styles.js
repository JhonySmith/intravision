import styled from 'styled-components';

export const MainForm = styled.form`
  box-sizing: border-box;
  width: 750px;
  height: fit-content;

  padding-top: 25px;
  padding-bottom: 65px;
  padding-left: 40px;

  background-color: #ecf3f7;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;

  margin-top: 16px;

  font-size: 14px;
  font-family: 'Ubuntu';
  color: #9f9ea7;
`;

export const DescriptionText = styled.p`
  font-size: 14px;
  font-family: 'Ubuntu';
  color: black;
`;

export const FormText = styled.textarea`
  width: 625px;
  height: ${(props) => props.areaHeigth}px;

  margin-top: 15px;

  border: 1px solid #e8e8e8;
  border-radius: 5px;

  resize: none;
`;

export const FormSubmitButton = styled.button`
  width: 150px;
  margin-top: 10px;
  padding-top: 10px;
  padding-bottom: 10px;

  background-color: #008cf0;
  border: none;
  border-radius: 20px;

  font-size: 14px;
  font-family: 'Roboto';
  color: white;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
