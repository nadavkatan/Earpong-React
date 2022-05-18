import React, {useContext, useEffect, useState} from 'react';
import  Button from '@mui/material/Button';
import {AppContext} from '../../context/Context';


const SoundButton = ({soundName, index}) => {

  const [correct, setCorrect] = useState(undefined);

  //get from context
  const{checkAnswer, playRandomSound, setStep, mistakes} = useContext(AppContext);


  const handleClick = (index)=>{
    setCorrect(checkAnswer(index));
  
    //check if game over
    if(mistakes === 4){
      setStep(prev=>prev+1)
      setCorrect(undefined)
    }else{
      setTimeout(()=>{
        setCorrect(undefined)
        playRandomSound()
    },1000);
    }
  }


  return (
   <Button variant="contained" onClick={()=> handleClick(index)} style={{margin:'1em!important'}} color={correct? 'secondary' : correct===undefined? 'primary' : 'error'}>{soundName}</Button>
  )
}

export default SoundButton