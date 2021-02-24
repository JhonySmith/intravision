import React from 'react';

import {
  TasksTable,
  TasksTitle,
  IDCell,
  TaskDescription,
  StatusCell,
  ExecNameCell,
  HeadersBlock,
  MarginLine,
  TaskRow,
  StatusDecoration,
  TaskText,
} from './tasks-list.js';

import { titles } from './tasks-mocks.js';

export default function TasksList(props) {
  const { tasks } = props;

  return (
    <TasksTable>
      <thead>
        <HeadersBlock>
          {titles.map((title, index) => (
            <TasksTitle key={index}>{title}</TasksTitle>
          ))}
        </HeadersBlock>
        <MarginLine></MarginLine>
      </thead>
      <tbody>
        {tasks.map((task, index) => {
          return (
            <TaskRow>
              <IDCell>{task.id}</IDCell>
              <TaskDescription>
                <TaskText>{task.name}</TaskText>
              </TaskDescription>
              <StatusCell>
                <StatusDecoration color={task.statusRgb}>{task.statusName}</StatusDecoration>
              </StatusCell>
              <ExecNameCell>{task.executorName}</ExecNameCell>
            </TaskRow>
          );
        })}
      </tbody>
    </TasksTable>
  );
}
