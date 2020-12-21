import React, { useState, useContext } from 'react';
import toDoContext from '../../utils/context/toDoContext';
import EditForm from '../EditForm/EditForm';

function Point({ point }) {
  const [check, setCheck] = useState(false);
  const [edit, setEdit] = useState(false);
  const { dispatch } = useContext(toDoContext);
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
    <div className='d-flex justify-content-between align-items-center'>
      <input type='checkbox' className='m-3' onChange={() => { setCheck((prevState) => !prevState); }}/>
      {check
        ? <><i className="fas fa-check-circle btn-success" style={{ fontSize: '30px' }}></i>{edit ? <EditForm setEdit = {setEdit} point={point} /> : <span className='m-3 text-muted' style={{ textDecoration: 'line-through' }}>{point.value}</span>}</>
        : <><i className="fas fa-minus-circle btn-danger" style={{ fontSize: '30px' }}></i>{edit ? <EditForm setEdit = {setEdit} point={point} /> : <span className='m-3'>{point.value}</span>}</>}
    </div>

    <button type='button' className='btn btn-light' onClick={() => { setEdit(() => !edit); }}><i class="far fa-edit"></i></button>
    <button type='button' className='btn btn-danger' onClick={() => { dispatch({ type: 'DELETE_POINT', payload: point.id }); }}><i className="fas fa-trash"></i></button>
    </li>
  );
}

export default Point;
