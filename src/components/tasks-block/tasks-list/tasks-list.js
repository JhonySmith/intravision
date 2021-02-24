import styled from 'styled-components';

export const TasksTable = styled.table`
  border-collapse: collapse;
`;

export const HeadersBlock = styled.tr``;

export const MarginLine = styled.tr`
  height: 15px;
`;

export const TasksTitle = styled.td`
  margin-bottom: 15px;

  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 15px;

  border-right: 1px solid #e2e7ea;

  font-size: 16px;
  font-family: 'Ubuntu';

  color: #404147;

  &:first-child,
  &:last-child {
    text-align: center;
  }

  &:last-child {
    border-right: none;
  }
`;

export const TaskRow = styled.tr`
  height: 55px;

  border-top: 1px solid #eef1f4;

  font-size: 16px;
  font-family: 'Roboto';
  color: #525460;

  &:last-child {
    border-bottom: 1px solid #eef1f4;
  }
`;

export const IDCell = styled.td`
  width: 115px;

  text-align: center;
`;

export const TaskDescription = styled.td`
  padding-left: 15px;
  padding-right: 15px;

  align-items: center;
  text-align: left;
`;

export const TaskText = styled.span`
  display: block;

  width: 380px;
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const StatusCell = styled.td`
  width: 125px;
  padding-left: 15px;

  text-align: center;
`;

export const StatusDecoration = styled.span`
  display: block;

  width: fit-content;
  padding: 5px 17px;

  border-radius: 11px;

  background-color: ${(props) => props.color};

  font-size: 12px;
  color: white;
`;

export const ExecNameCell = styled.td`
  text-align: left;

  padding-left: 15px;
`;
