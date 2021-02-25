import React from 'react';
import PropTypes from 'prop-types';

import { DetailInformationBlock, FormLabel, InfoTextForm } from './detail-information-styles.js';

function DetailInformation(props) {
  const { task } = props;
  return (
    <DetailInformationBlock>
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
        <InfoTextForm>{task.executorName}</InfoTextForm>
      </FormLabel>
      <FormLabel>
        Приоритет
        <InfoTextForm>{task.priorityName}</InfoTextForm>
      </FormLabel>
      <FormLabel>
        Срок
        <InfoTextForm>{task.priorityName}</InfoTextForm>
      </FormLabel>
    </DetailInformationBlock>
  );
}

DetailInformation.propTypes = {
  task: PropTypes.object,
};

export default DetailInformation;
