import React from 'react';
import { TaskForm } from './new-task-form-styles.js';
import TaskFormHeader from './task-from-header/task-form-header.jsx';
import Form from './form/form.jsx';

export default function NewTaskForm(props) {
  const { setMode } = props;

  return (
    <TaskForm>
      <TaskFormHeader setMode={setMode} />
      <Form setMode={setMode} />
    </TaskForm>
  );
}
