import React from 'react';
import '../App.css';

function Cards(props) {
  return (
    <div className='card'>
        {props.children}
    </div>
  )
}

export default Cards