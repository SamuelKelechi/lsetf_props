import React from 'react';
import Card from './Components/Card'
import Num1 from './Components/Img/2.webp'
import Num2 from './Components/Img/1.webp'
import Num3 from './Components/Img/3.webp'

function App () {
  return(
    <>

        <Card main="Tynker Junior" 
        text="Tap-Tap picture coding with voice-overs. Pre-readers solve story-based puzzles and build their first programs in coding sandboxes. Ages 5-7"
        para="2,200+ reviews"
        Avatar={Num1}
        col='green' 
        />


        <Card main="Tynker" 
        Avatar={Num2} 
        col='blue' 
        text="Drag-and-drop block coding with a full-featured workshop. Build games and apps, compose music and art, control smart devices, and much, much more. Ages 6-11"
        />

        <Card main="Mod Creator" Avatar={Num3}
        col='pink' 
        
        />
    </>
  )
}
export default App


