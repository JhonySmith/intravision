import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import CommentsList from '../comments-list/comments-list.jsx';
import NewComment from '../new-comment/new-comment.jsx';

import {
  MainForm,
  FormLabel,
  FormSubmitButton,
  DescriptionText,
} from './main-information-styles.js';

import { connect } from 'react-redux';
import { ActionCreator } from '../../../../../reducer/reducer.js';

import { sendNewTask, getTasks } from '../../../../../api/server-api.js';

import { MODES } from '../../../../../constants/modes.js';

function MainInformation(props) {
  const { setChoosenTaskID, choosenTask, setTasks, setMode, taskForSend } = props;
  const descriptionRef = useRef(null);
  const nameRef = useRef(null);

  console.log(taskForSend);

  const taskSended = (id) => {
    setChoosenTaskID(id);
    getTasks(setTasks);
    setMode(MODES.EDIT);
  };

  const createNewTask = () => {
    const newTask = {
      name: nameRef.current.value,
      description: descriptionRef.current.value,
    };

    sendNewTask(newTask, taskSended);
  };

  return (
    <MainForm>
      <FormLabel>
        Описание
        <DescriptionText>{choosenTask.description}</DescriptionText>
      </FormLabel>

      <NewComment
        comments={choosenTask.lifetimeItems}
        choosenTask={choosenTask}
        taskForSend={taskForSend}
      />

      <FormSubmitButton
        onClick={(evt) => {
          evt.preventDefault();
          createNewTask();
        }}
      >
        Сохранить
      </FormSubmitButton>
      <CommentsList comments={choosenTask.lifetimeItems} />
    </MainForm>
  );
}

MainInformation.propTypes = {
  choosenTask: PropTypes.array,
  setTasks: PropTypes.func,
  setMode: PropTypes.func,
};

const mapStateToProps = (state) => ({
  tasks: state.currentTasks,
  choosenTask: state.choosenTask,
});

const mapDispatchToProps = (dispatch) => ({
  setTasks(tasks) {
    dispatch(ActionCreator.setCurrentTasks(tasks));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainInformation);