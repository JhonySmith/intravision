const TENANTGUID = '80bacf9e-e52c-4e65-986d-ad5bd01aecdf';
const SERVER = 'http://intravision-task.test01.intravision.ru/';

export function getTasks(func) {
  fetch(SERVER + 'odata/tasks?tenantguid=' + TENANTGUID).then((req) =>
    req.json().then((data) => func(data.value)),
  );
}

export function sendNewTask(task, func) {
  fetch(SERVER + 'api/' + TENANTGUID + '/Tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(task),
  }).then((req) => req.json().then((data) => func(data)));
}

export function editTask(task, func) {
  fetch(SERVER + 'api/' + TENANTGUID + '/Tasks', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(task),
  }).then((req) => {
    if (func) {
      func();
    }
  });
}

export function getTask(id, actionFunc) {
  fetch(SERVER + 'api/' + TENANTGUID + '/Tasks/' + id).then((req) =>
    req.json().then((data) => actionFunc(data)),
  );
}

export function getStatuses(actionFunc) {
  fetch(SERVER + 'api/' + TENANTGUID + '/Statuses').then((req) =>
    req.json().then((data) => actionFunc(data)),
  );
}

export function getUsers(actionFunc) {
  fetch(SERVER + 'api/' + TENANTGUID + '/Users').then((req) =>
    req.json().then((data) => actionFunc(data)),
  );
}
