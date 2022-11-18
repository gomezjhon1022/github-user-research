import { CardMedia, Grid } from '@mui/material';
import React from 'react'

const UserCard = (props) => {
  const { userState } = props;
  const { avatar_url } = userState;
  return (
    <Grid
    contenedor="true"
    >
      <Grid item xs={3}>
        <CardMedia
          component="img"
          alt="GitHub User"
          image={avatar_url}
        />
      </Grid>
      <Grid item xs={9}></Grid>
    </Grid>
  )
}

export { UserCard };