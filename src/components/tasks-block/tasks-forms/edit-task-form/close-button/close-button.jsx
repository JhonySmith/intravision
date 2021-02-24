import React from 'react';
import { CloseBtn } from './close-button-styles.js';

import { MODES } from '../../../../../constants/modes.js';

export default function CloseButton(props) {
  const { setMode } = props;
  return (
    <CloseBtn
      onClick={(evt) => {
        evt.preventDefault();
        setMode(MODES.DEFAULT);
      }}
    />
  );
}
