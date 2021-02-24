import React from 'react';

import NewTaskForm from './new-task-form/new-task-form.jsx';

import { MODES } from '../../../constants/modes.js';

export default function TasksForms(props) {
  const { mode, setMode } = props;

  switch (mode) {
    case MODES.NEW:
      return <NewTaskForm setMode={setMode} />;
    case MODES.EDIT:
      return <div></div>;
    default:
      return '';
  }
}
