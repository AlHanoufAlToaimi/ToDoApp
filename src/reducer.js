const initialState = {
    toDoList: [
        {id:1,task:"Attend MERN Class"},
        {id:2,task:"Send XY Email"},
        {id:3,task:"Call School"}
    ]
};


const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        
        case 'ADD':
            return {
                ...state, toDoList: [...state.toDoList, action.payload.todo] 
            };
            // break;
            
        case 'DELETE':
            return {
                ...state,
                toDoList: [...state.toDoList.filter((todo) => todo.id !== action.payload.todo.id)]
            };
            // break;
            
        default:
            return state;
        }
    };

export default reducer;