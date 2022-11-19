import React, { useEffect, useState } from "react";
import { Container } from '@mui/material';
import Searcher from "./components/Searcher";
import { getGitHubUser } from "./services/users";
import { UserCard } from "./containers/UserCard";

const App = () => {
  const [ inputUser, setInputUser ] = useState('octocat');
  const [ userState, setUserState ] = useState(inputUser);
  const [ notFound, setNotFound ] = useState(false);

  const gettingUser = async (user) => {
    const userResponse = await getGitHubUser(user);
    if(userState === 'octocat') {
      localStorage.setItem('octocat', userResponse)
    }
    if(userResponse.message === 'Not Found') {
      const { octocat }  =  localStorage;
      setInputUser(octocat);
      gettingUser('octocat');
      setNotFound(true);
    } else {
      setUserState(userResponse);
    }
  }
  useEffect(() => {
    gettingUser(inputUser)
    if(userState !=='octocat') {
      setNotFound(false);
    }
  },[inputUser])
  return(
    <Container sx={{
      background: 'whiteSmoke',
      width: '80vw',
      height: '600px',
      borderRadius: '16px',
      marginTop: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

    }}>
      <Searcher inputUser={inputUser} setInputUser={setInputUser} notFound={notFound}></Searcher>
      <UserCard userState={userState} />
    </Container>
  )
};

export default App;