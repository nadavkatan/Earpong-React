import { makeStyles } from '@mui/styles';

export const useStyles= makeStyles({
    instructions:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
        textAlign: 'center',
        padding: '1em',
        minHeight: '10em',
        zIndex:20
    },
    subtitle:{
        marginBottom: '2em!important',
        marginTop:'0.5em!important',
        color: 'white',
        zIndex:20,
        width: '60%',
        // fontSize: '1.3em!important',
    },
    title:{
        color:'white'
    },
    btnsContainer:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn:{
        margin:'0.5em!important',
    }
});