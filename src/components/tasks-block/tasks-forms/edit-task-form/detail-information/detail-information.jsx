import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import localization from 'moment/locale/ru';

import {
  DetailInformationBlock,
  FormLabel,
  InfoTextForm,
  TermForm,
} from './detail-information-styles.js';
import InformationStatus from './information-status/information-status.jsx';
import Executor from './executor/executor.jsx';
import Tags from './tags/tags.jsx';

function DetailInformation(props) {
  const { task, statuses, users, setExecutorId, setStatusId } = props;
  let updateTime = moment(task.updatedAt).locale('ru', localization).format('DD.MM.YYYY г.');

  return (
    <DetailInformationBlock>
      <InformationStatus
        statuses={statuses}
        currentStatusID={task.statusId}
        currentStatusRgb={task.statusRgb}
        setStatusId={setStatusId}
      ></InformationStatus>
      <FormLabel>
        Заявитель
        <InfoTextForm>{task.initiatorName}</InfoTextForm>
      </FormLabel>
      <FormLabel>
        Создана
        <InfoTextForm>{task.initiatorName}</InfoTextForm>
      </FormLabel>
      <FormLabel>
        Исполнитель
        <Executor users={users} currentExecutorID={task.executorId} setExecutorId={setExecutorId} />
      </FormLabel>
      <FormLabel>
        Приоритет
        <InfoTextForm>{task.priorityName}</InfoTextForm>
      </FormLabel>
      <FormLabel>
        Срок
        <TermForm>{updateTime}</TermForm>
      </FormLabel>
      <FormLabel>
        Теги
        <Tags tags={task.tags} />
      </FormLabel>
    </DetailInformationBlock>
  );
}

DetailInformation.propTypes = {
  task: PropTypes.object,
};

export default DetailInformation;
