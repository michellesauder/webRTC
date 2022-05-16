import React, { useContext, useState } from 'react';
import { Grid, Typography, Paper, TextField, Container, Button} from '@mui/material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SocketContext } from '../SocketContext';


const Options = ({ children }) => {
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser  } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');

  return (
    <Container
    >
      <Paper elevation={10} style={{display: 'flex', justifyContent: 'center'}}>
        <form noValidate autoComplete="off">
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography variant="h6">
                Account Info
              </Typography>
              <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth/>
              <CopyToClipboard text={me} >
                <Button variant="contained" color="primary" >Copy your Id</Button>
              </CopyToClipboard>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6">
                Make a call
              </Typography>
              <TextField label="ID to Call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth/>
              {callAccepted && !callEnded ? (
                <Button variant="contained" color="secondary" fullWidth onClick={leaveCall}> Hang Up </Button>
              ): ( <Button variant="contained" color="secondary" fullWidth onClick={() => callUser(idToCall)} >Call</Button>)}
            </Grid>
          </Grid>
        </form>
        {children}
      </Paper>
    </Container>
  )
}

export default Options