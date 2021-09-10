import React from 'react';

const Scroll = (props) => {
    return(
        //used to provide a scroll view
        <div style={{overflowY: 'scroll'}}>
            {props.children}
        </div>
    )
};

export default Scroll;
