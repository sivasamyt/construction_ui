import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import * as colors from "@mui/material/colors";
import React from 'react';

type ColorName = 'red' | 'blue' | 'green' | 'purple' | 'orange' | 'yellow';
type buttonType = 'button' | 'submit' | 'reset';


type Props = {
    label: string;
    handleClick?: () => void;
    type?: buttonType;
    color?: ColorName;
    Icon?: React.ReactNode;
}

const StyleButton: React.FC<Props> = ({ label, handleClick, type, color, Icon }) => {
  const selectedColor = color ? colors[color] : colors.purple;

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(selectedColor[500]),
    backgroundColor: selectedColor[500],
    "&:hover": {
      backgroundColor: selectedColor[900],
    },
  }));

  return (
    <ColorButton
      startIcon={Icon}
      variant="contained"
      onClick={handleClick && handleClick}
      type ={type ? type:"button"}
    >
      {label}
    </ColorButton>
  );
};

export default StyleButton;

