import React from 'react';
import './Card.css'
import Logo1 from './Img/2.webp'

function Card (props){
    return(
        <div className='CardHolder'>
          <div className='CardWrapper' style={{display:"flex", backgroundColor:props.col}}>
            <img src={props.Avatar} />
            <h3>{props.main}</h3>
            <p>{props.text}</p>
            <div className='DownHolder'>
                <p>Icon</p>
                
                <p>{props.para}</p>  
            </div>
          </div>
        </div>
    )
}

export default Card