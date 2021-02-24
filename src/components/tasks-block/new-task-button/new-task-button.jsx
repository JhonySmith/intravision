import React from 'react';
import { CreateNewTaskBtn } from './new-task-button-styles.js';
import { MODES } from '../../../constants/modes.js';

export default function NewTaskButton(props) {
  const { setCurrentMode } = props;
  return (
    <CreateNewTaskBtn
      onClick={(evt) => {
        evt.preventDefault();
        setCurrentMode(MODES.NEW);
      }}
    >
      Создать заявку
    </CreateNewTaskBtn>
  );
}
