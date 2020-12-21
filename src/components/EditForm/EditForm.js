import React, { useContext, useState } from 'react';
import toDoContext from '../../utils/context/toDoContext';

function EditForm({ setEdit, point }) {
  const [points, setPoints] = useState(point);
  const { dispatch } = useContext(toDoContext);
  return (
        <form className='d-flex justify-content-center align-items-center' onSubmit={(event) => {
          event.preventDefault();
          dispatch({ type: 'EDIT_POINT', payload: points });
          setEdit((prevState) => !prevState);
        }}>
            <input type='text' value = {points.value} onChange={(event) => {
              const { value } = event.target;
              setPoints((prevState) => ({ ...prevState, value }));
            }}/>
            <button tupe='submit' className='btn btn-primary pl-4 pr-4'>Edit</button>
        </form>
  );
}

export default EditForm;
