import styles from 'styled-components';
import Icon from 'utils/Icon/Icon';
import { styled, Box, Typography } from '@mui/material';

export const Button = styles.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
`;

export const IconStyled = styled(Icon)(
    ({ theme }) => `
        stroke: ${theme.palette.mode === 'dark' ? '#FFFFFF' : '#111'} ;
        transition: linear 0.3s;

        &:hover,
        &:focus {
            stroke: #3e85f3;
        }
`)

export const BtnStyled = styles.button`
    background-color: transparent;
    border: none;
    padding: 0;
`;

<<<<<<< HEAD
export const BtnStyledText = styled(Typography)(
  ({ theme }) => `
    margin-left: 4px;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.17;
    color: ${theme.palette.mode === 'dark' ? '#fff' : '#111'} ;
`
);

export const BtnWrap = styles.div`
    background-color: transparent;
    position: relative;
=======
export const BtnStyled = styled.button`
  background-color: transparent;
  border: none;
`;
export const BtnStyledText = styled.span`
  margin-right: 4px;
  width: 67px;
  text-align: left;
`;
export const BtnWrap = styled.div`
  background-color: transparent;
  position: relative;
`;
export const Wrapper = styled.div`
  position: absolute;
  flex-direction: column;

  width: 110px;

  top: -20px;
  right: -65px;
  border: transparent;
  border-radius: 8px;

  font-family: 'Inter';
  font-style: Medium;
  font-size: 12px;
>>>>>>> 91668afc8608526fc8d05a67b247d29088c3c519
`;
export const BtnMoveWrap = styled.button`
  background-color: #fff;
  border: none;
  z-index: 13;
  padding: 0 2px;
`;

<<<<<<< HEAD
export const Wrapper = styled(Box)(
  ({ theme }) => `
    position: absolute;
    flex-direction: column;
    gap: 5px;
    width: 110px;
    padding: 10px;
    top: -50px;
    right: -55px;
    border: ${theme.palette.mode === 'dark' ? '1px solid #111' : 'transparent'}; 
    font-family: 'Inter';
    font-style: Medium;
    font-size: 12px;
    border-radius: 8px;
    background-color: ${theme.palette.mode === 'dark' ? '#171820' : '#fff'};
    box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.1);
`
);

export const LabelStyled = styled(Box)(
  ({ theme }) => `
    cursor: pointer;
    padding: 10px;
    border-radius: 8px;
    background-color: ${theme.palette.mode === 'dark' ? '#171820' : '#fff'}; 
    transition: box-shadow 0.3s ease-in;
    &:hover,
    &:focus {
      box-shadow: 2px 2px 4px #1565c0;
    }
`
);
=======
export const LabelStyled = styled.div`
  cursor: pointer;
  padding: 10px 0;
  transition: scale 0.3s ease-in, background-color 0.3s ease-in;
  &:hover,
  &:focus {
    scale: 1.05;
    background-color: #e3f3ff;
  }
`;
>>>>>>> 91668afc8608526fc8d05a67b247d29088c3c519
