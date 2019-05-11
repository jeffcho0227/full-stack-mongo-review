import React from 'react';
import ListEntry from './ListEntry.jsx';

const List = (props) => {
  
  return(
    <div>
      {props.list.map((item, index) => {
        return <ListEntry item={item} key={index} handleFetchData={props.handleFetchData}/>
      })}
    </div>
  )
}

export default List;