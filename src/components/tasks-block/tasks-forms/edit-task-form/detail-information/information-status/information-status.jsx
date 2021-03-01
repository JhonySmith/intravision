import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StatusList, StatusItem, StatusBlock } from './information-status-styles.js';

function InformationStatus(props) {
  const { statuses, currentStatusID, currentStatusRgb, setStatusId } = props;
  const [currentStatus, setCurrentStatus] = useState({});

  function getCurrentStatus(id) {
    setCurrentStatus(statuses.slice().filter((status) => status.id === +id)[0]);
    setStatusId(id);
  }

  return (
    <StatusBlock statusColor={currentStatus.rgb || currentStatusRgb}>
      <StatusList onChange={(evt) => getCurrentStatus(evt.target.value)}>
        {statuses.map((status) => {
          const selected = currentStatusID === status.id ? 'selected' : '';
          return (
            <StatusItem value={status.id} selected={selected}>
              {status.name}
            </StatusItem>
          );
        })}
      </StatusList>
    </StatusBlock>
  );
}

InformationStatus.propTypes = {
  statuses: PropTypes.array,
  currentStatusID: PropTypes.string,
};

export default InformationStatus;
