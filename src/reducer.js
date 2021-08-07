const initialState = {
    toDoList: [{ id: 0, task: 'Attend MERN Class' },
    {id:1,task:"Send XY Email"},
    {id:2,task:"Call School"},
    {id:3,task:"Call Bank"}
    ]
  
  };
  
  const reducer = (state = initialState, action) => {
  console.log(state)
  //let newState = {...state}; 
  
    switch (action.type) {
      case 'ADD':
        return { ...state, toDoList: [...state.toDoList, action.payload.todo] };
  
   // break;
  
  //   case 'DELETE':
  // //    return state.filter(toDoList => toDoList.id !== action.id);
  // return {...state,
  //   toDoList: state.toDoList.filter(t => t !== action.payload)}
  
  //            //   break;}
                
  }
  return state;
  };
  
  export default reducer;