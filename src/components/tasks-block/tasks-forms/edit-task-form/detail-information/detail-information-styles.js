import styled from 'styled-components';

export const DetailInformationBlock = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 240px;

  padding-top: 25px;
  padding-left: 25px;

  border-left: 1px solid #d7dce0;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;

  margin-top: 16px;

  font-size: 14px;
  font-family: 'Ubuntu';
  color: #9f9ea7;
`;

export const InfoTextForm = styled.p`
  color: black;
`;

export const TermForm = styled.div`
  color: black;
  display: flex;
  margin-top: 15px;

  &::before {
    content: '';
    display: block;
    width: 18px;
    height: 15px;
    margin-right: 7px;
    background: url('./img/icons/calendar.png') no-repeat center;
  }
`;
