const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POINT':
      return { ...state, points: [...state.points, action.payload] };
    case 'DELETE_POINT':
      return { ...state, points: state.points.filter((point) => point.id !== action.payload) };
    case 'EDIT_POINT':
      return {
        ...state,
        points: state.points.map((point) => {
          if (point.id === action.payload.id) {
            const editedPoint = { id: action.payload.id, value: action.payload.value };
            return editedPoint;
          }
          return point;
        })
      };
    default:
      return state;
  }
};

export default reducer;
