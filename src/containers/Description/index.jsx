import { Typography, Stack } from '@mui/material';
import React from 'react';
import { PaperInformation } from '../../components/PaperInformation';

const Description = (props) => {
  const { userState } = props;
  const { bio } = userState;
  return (
    <>
      <Stack>
        {bio !== null
          ?<Typography>{bio}</Typography>
          :<Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet quam eu diam egestas.</Typography>
        }
      </Stack>
      <PaperInformation userState={userState}/>
      {/* <LocationInformation /> */}
    </>
  )
}

export { Description };