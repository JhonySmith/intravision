import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { ActionCreator } from '../../reducer/reducer.js';

import Search from '../tasks-block/search/search.jsx';
import TasksList from '../tasks-block/tasks-list/tasks-list.jsx';
import NewTaskButton from '../tasks-block/new-task-button/new-task-button.jsx';
import TasksForms from './tasks-forms/tasks-forms.jsx';

import { getTasks } from '../../api/server-api.js';

import { TasksSection } from './tasks-block-styles.js';
import { MODES } from '../../constants/modes.js';

function TasksBlock(props) {
  const { tasks, setTasks } = props;

  const [mode, setMode] = useState(MODES.DEFAULT);

  useEffect(() => getTasks(setTasks), [setTasks]);

  return (
    <TasksSection>
      <TasksForms mode={mode} setMode={setMode} />
      <Search></Search>
      <NewTaskButton setCurrentMode={setMode}></NewTaskButton>
      <TasksList tasks={tasks}></TasksList>
    </TasksSection>
  );
}

const mapStateToProps = (state) => ({
  tasks: state.currentTasks,
});

const mapDispatchToProps = (dispatch) => ({
  setTasks(tasks) {
    dispatch(ActionCreator.setCurrentTasks(tasks));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TasksBlock);
