import styled from 'styled-components';

export const SearchInput = styled.input`
  width: 680px;
  padding-top: 12px;
  padding-bottom: 13px;
  padding-left: 18px;

  border: 1px solid #a9b2c9;
  border-radius: 20px;

  font-size: 16px;
  font-family: 'Roboto';
`;

export const SearchWraper = styled.div`
  position: relative;

  &::before {
    content: ' ';
    position: absolute;
    right: 13px;
    top: 11px;

    display: block;
    width: 19px;
    height: 19px;

    background: url('./img/icons/search.png') no-repeat center center;
  }
`;
