import React, { useReducer } from 'react';
import toDoContext from './utils/context/toDoContext';
import reducer from './utils/reducer/reducer';
import AddForm from './components/AddForm/AddForm';
import PointList from './components/PointList/PointList';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [state, dispatch] = useReducer(reducer, { points: [] });
  return (
    <toDoContext.Provider value={{ state, dispatch }}>
      <div className='container'>
        <AddForm />
        {state.points && <PointList />}
      </div>
    </toDoContext.Provider>

  );
}

export default App;
