import React from 'react';


const Property = (props) => {
    return(
        
        <div style={{color:props.col, textAlign:props.direct}}>
            {props.content}
        </div>
    )
}

export default Property