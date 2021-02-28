import { MODES } from '../constants/modes';

const ActionType = {
  SET_CURRENT_TASKS: 'GET_CURRENT_TASKS',
  SET_CHOOSEN_TASK_ID: 'SET_CHOOSEN_TASK_ID',
  SET_CHOOSEN_TASK: 'SET_CHOOSEN_TASK',
  SET_TENANT_GUID: 'SET_TENANT_GUID',
  SET_MODE: 'SET_MODE',
  SET_STATUSES: 'SET_STATUSES',
  SET_USERS: 'SET_USERS',
};

const initialState = {
  currentTasks: [],
  choosenTaskID: null,
  choosenTask: [],
  mode: MODES.DEFAULT,
  statuses: [],
  users: [],
};

const ActionCreator = {
  setCurrentTasks: (tasks) => {
    return {
      type: ActionType.SET_CURRENT_TASKS,
      payload: tasks,
    };
  },
  setChoosenTaskID: (id) => {
    return {
      type: ActionType.SET_CHOOSEN_TASK_ID,
      payload: id,
    };
  },
  setChoosenTask: (task) => {
    return {
      type: ActionType.SET_CHOOSEN_TASK,
      payload: task,
    };
  },
  setMode: (mode) => {
    return {
      type: ActionType.SET_MODE,
      payload: mode,
    };
  },
  setStatuses: (statuses) => {
    return {
      type: ActionType.SET_STATUSES,
      payload: statuses,
    };
  },
  setUsers: (users) => {
    return {
      type: ActionType.SET_USERS,
      payload: users,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_TASKS:
      return Object.assign({}, state, {
        currentTasks: action.payload,
      });
    case ActionType.SET_CHOOSEN_TASK_ID:
      return Object.assign({}, state, {
        choosenTaskID: action.payload,
      });
    case ActionType.SET_CHOOSEN_TASK:
      return Object.assign({}, state, {
        choosenTask: action.payload,
      });
    case ActionType.SET_MODE:
      return Object.assign({}, state, {
        mode: action.payload,
      });
    case ActionType.SET_STATUSES:
      return Object.assign({}, state, {
        statuses: action.payload,
      });
    case ActionType.SET_USERS:
      return Object.assign({}, state, {
        users: action.payload,
      });
    default:
      return state;
  }
};

export { ActionType, ActionCreator, reducer };
