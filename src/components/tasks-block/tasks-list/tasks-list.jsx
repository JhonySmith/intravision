import React from 'react';
import { MODES } from '../../../constants/modes.js';

import { getTask } from '../../../api/server-api.js';

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
  const { tasks, setMode, setChoosenTask } = props;

  function setTask(id) {
    setChoosenTask(id);
    setMode(MODES.EDIT);
  }

  function onTaskClick(id) {
    getTask(id, setTask);
  }

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
            <TaskRow key={index} onClick={() => onTaskClick(task.id)}>
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
