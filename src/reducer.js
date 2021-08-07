const initialState = {
    toDoList: [{ id: 0, task: 'Attend MERN Class' },
    {id:1,task:"Send XY Email"},
    {id:2,task:"Call School"}
    ]
  
  };
  
  const reducer = (state = initialState, action) => {
  console.log(state)
  //let newState = {...state}; 
  
    switch (action.type) {
      case 'ADD':
        return { ...state, toDoList: [...state.toDoList, action.payload.todo] };
  
   // break;
  
     case 'DELETE':{

    
           
            return {
              ...state,
              toDoList: [...state.toDoList.filter((todo) => todo.id !== action.payload.todo.id)]
            };
          }
   
      //       break;
                
  
  default:
  return state;}
  };
  
  export default reducer;