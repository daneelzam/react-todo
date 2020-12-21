import React, { useContext, useState } from 'react';
import toDoContext from '../../utils/context/toDoContext';

function AddForm() {
  const [points, setPoints] = useState({ id: Math.random(), value: '' });
  const { dispatch } = useContext(toDoContext);
  return (
        <form className='mt-3 mb-1 d-flex justify-content-center align-items-center' onSubmit={(event) => {
          event.preventDefault();
          const id = Math.random();
          setPoints((prevState) => ({ ...prevState, id }));
          dispatch({ type: 'ADD_POINT', payload: points });
        }}>
            <input type='text' style={{ width: '500px', height: '39px' }} value = {points.value} placeholder='What needs to be done?' onChange={(event) => {
              const { value } = event.target;
              setPoints((prevState) => ({ ...prevState, value }));
            }}/>
            <button tupe='submit' className='btn btn-primary pl-4 pr-4'> <i className="fas fa-plus-circle"></i> Add</button>
        </form>
  );
}

export default AddForm;
