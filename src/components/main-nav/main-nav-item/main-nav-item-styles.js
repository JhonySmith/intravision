import styled from 'styled-components';

export const NavItem = styled.li`
  width: 100%;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    background: #00243c;
  }
`;

export const NavItemLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 70px;

  font-size: 12px;
  color: white;
  text-decoration: none;

  &::before {
    content: '';
    display: block;

    width: ${(props) => props.itemData.iconWidth}px;
    height: ${(props) => props.itemData.iconHeight}px;

    margin-bottom: 8px;

    background-image: url(${(props) => props.itemData.iconLink});
    background-repeat: no-repeat;
    background-position: center;
  }
`;
