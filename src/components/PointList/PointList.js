import React, { useContext } from 'react';
import Point from '../Point/Point';
import toDoContext from '../../utils/context/toDoContext';

function PointList() {
  const { state } = useContext(toDoContext);
  return (
    <div className='card' >
        <div className="card-header">ToDo List</div>
        <ul className='list-group list-group-flush'>
            { state.points.map((point) => <Point key={point.id} point = {point}/>)}
        </ul>
    </div>
  );
}

export default PointList;
