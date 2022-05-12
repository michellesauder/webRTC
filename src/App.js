import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
// import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from './components/VideoPlayer';
import Notifications from './components/Notifications';
import Options from './components/Options';

// const useStyles = makeStyles((theme) => ({
//     appBar: {
//       borderRadius: 15,
//       margin: '30px 100px',
//       display: 'flex',
//       flexDirection: 'row',
//       justifyContent: 'center',
//       alignItems: 'center',
//       width: '600px',
//       border: '2px solid black',
  
//       [theme.breakpoints.down('xs')]: {
//         width: '90%',
//       },
//     },
//     image: {
//       marginLeft: '15px',
//     },
//     wrapper: {
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       width: '100%',
//     },
//   }));


const App = () => {
    // const classes = useStyles();

  return (
    <div>
        <AppBar position='static' color="inherit">
            <Typography variant='h2' align='center'>
                Video Chat
            </Typography>
        </AppBar>
        <VideoPlayer/>
        <Options>
            <Notifications/>
        </Options>
    </div>
  )
}

export default App