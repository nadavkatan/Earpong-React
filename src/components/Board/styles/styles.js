import { makeStyles } from '@mui/styles';



export const useStyles = makeStyles({
    title:{
        color:"white",
        zIndex: 10,
        paddingLeft: '1em!important',
        paddingRight: '1em!important',
        marginTop: '2em'
    },
    boardContainer:{
        height: '100%', 
        width: '70%!important', 
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    board: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap:'wrap',
        zIndex:30,
    },
    img:{
        position: 'absolute',
        zIndex: 0,
        width:'100%',
        height:'100%',
        
    }
}

)