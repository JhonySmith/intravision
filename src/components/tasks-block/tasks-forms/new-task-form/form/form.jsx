import React, { useRef } from 'react';
import { MainForm, FormLabel, FormText, FormSubmitButton } from './form-styles.js';

import { connect } from 'react-redux';
import { ActionCreator } from '../../../../../reducer/reducer.js';

import { sendNewTask, getTasks, getTask } from '../../../../../api/server-api.js';

import { MODES } from '../../../../../constants/modes.js';

function Form(props) {
  const { setChoosenTask, setTasks, setMode } = props;
  const descriptionRef = useRef(null);
  const nameRef = useRef(null);

  const taskSended = (id) => {
    const taskReady = (task) => {
      setChoosenTask(task);
      setMode(MODES.EDIT);
    };
    getTask(id, taskReady);
    getTasks(setTasks);
  };

  const createNewTask = () => {
    const newTask = {
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      lifetimeItems: [],
      tags: [],
    };

    sendNewTask(newTask, taskSended);
  };

  return (
    <MainForm>
      <FormLabel>
        Название
        <FormText areaHeigth="85" ref={nameRef} />
      </FormLabel>

      <FormLabel>
        Описание
        <FormText areaHeigth="134" ref={descriptionRef} />
      </FormLabel>

      <FormSubmitButton
        onClick={(evt) => {
          evt.preventDefault();
          createNewTask();
        }}
      >
        Сохранить
      </FormSubmitButton>
    </MainForm>
  );
}

const mapStateToProps = (state) => ({
  tasks: state.currentTasks,
});

const mapDispatchToProps = (dispatch) => ({
  setTasks(tasks) {
    dispatch(ActionCreator.setCurrentTasks(tasks));
  },
  setChoosenTaskID(id) {
    dispatch(ActionCreator.setChoosenTaskID(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
