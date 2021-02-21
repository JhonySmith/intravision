import React from 'react';
import { LogoBlock, LogoImage } from './styled-logo.js';

const Logo = () => {
  return (
    <LogoBlock>
      <LogoImage width="52" height="44" src="./img/logo.png" />
    </LogoBlock>
  );
};

export default Logo;
