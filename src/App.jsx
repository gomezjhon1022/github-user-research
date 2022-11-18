import React, { useEffect } from "react";
import { Container } from '@mui/material';
import Searcher from "./components/Searcher";
import { getGitHubUser } from "./services/users";

const App = () => {
  const [ inputUser, setInputUser ] = React.useState('octocat');
  // const [ userState, setUserState ] = useState('inputUser');

  const gettingUser = async (user) => {
    const userResponse = await getGitHubUser(user);
    console.log(userResponse);
  }

  useEffect(() => {
    gettingUser(inputUser)
  },[])
  return(
    <Container sx={{
      background: 'whiteSmoke',
      width: '80vw',
      height: '500px',
      borderRadius: '16px',
      marginTop: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

    }}>
      <Searcher inputUser={inputUser} setInputUser={setInputUser}></Searcher>
    </Container>
  )
};

export default App;