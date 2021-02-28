import styled from 'styled-components';

export const StatusBlock = styled.div`
  position: relative;
  &::before {
    position: absolute;
    top: 4px;
    content: '';
    display: block;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: ${(props) => props.statusColor};
  }
`;

export const StatusList = styled.select`
  margin-left: 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  appearance: none;

  font-family: 'Roboto';
  font-size: 14px;
  color: #525460;
`;

export const StatusItem = styled.option``;
