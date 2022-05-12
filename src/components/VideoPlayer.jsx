import React, {useContext} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import { SocketContext } from '../SocketContext';

const VideoPlayer = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
    console.log({userVideo})

  return (
    <Grid container >
        {/* our own video player */}
        <Paper>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom>
                        {name || 'name'}
                    </Typography>
                    <video playsInline 
                        muted
                        ref={myVideo} 
                        autoPlay/>
                </Grid>
            </Paper>
        {/* users video */}
        <Paper>
            <Grid item xs={12} md={6}>
                <Typography variant="h5" gutterBottom>
                    {call.name || 'caller'}
                </Typography>
                <video 
                    playsInline 
                    ref={userVideo} 
                    autoPlay/>
            </Grid>
        </Paper>
    </Grid>
  )
}

export default VideoPlayer