import React from 'react'
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import Button, { ButtonProps } from '@mui/material/Button';
import { isDisabled } from '@testing-library/user-event/dist/utils';



type Props = {
  loading:any;
  isDisabled:any;
  type:any
}

const SignupButton : React.FC<Props> = ({loading,isDisabled,type}) => {
  return (
    <div>
        <LoadingButton
          size="small"
          color="secondary"
        //   onClick={handleClick}
          loading={ loading }
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
          type={type}
          disabled={isDisabled ? false : true}
     
          // {isDisabled} ? disabled : ""
        >
          <span>Signup</span>
        </LoadingButton>
    </div>
  )
}

export default SignupButton