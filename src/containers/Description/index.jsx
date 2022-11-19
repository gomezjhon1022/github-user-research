import { Typography, Stack } from '@mui/material';
import React from 'react';
import { PaperInformation } from '../../components/PaperInformation';
import { LocationInformation } from '../../components/LocationInformation';

const Description = (props) => {
  const { userState } = props;
  const { bio } = userState;
  return (
    <>
      <Stack sx={{justifyContent:'center'}}>
        {bio !== null
          ?<Typography variant="body1">{bio}</Typography>
          :<Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet quam eu diam egestas.</Typography>
        }
      </Stack>
      <PaperInformation userState={userState}/>
      <LocationInformation userState={userState}/>
    </>
  )
}

export { Description };