import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
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
  const { tasks, setTasks, setChoosenTask } = props;

  const [mode, setMode] = useState(MODES.DEFAULT);

  useEffect(() => getTasks(setTasks), [setTasks]);

  return (
    <TasksSection>
      <TasksForms mode={mode} setMode={setMode} setChoosenTask={setChoosenTask} />
      <Search></Search>
      <NewTaskButton setCurrentMode={setMode}></NewTaskButton>
      <TasksList tasks={tasks} setMode={setMode} setChoosenTask={setChoosenTask}></TasksList>
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
  setChoosenTask(task) {
    dispatch(ActionCreator.setChoosenTask(task));
  },
});

TasksBlock.propTypes = {
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func,
  setChoosenTask: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksBlock);
