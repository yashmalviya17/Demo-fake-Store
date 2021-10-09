const initialState = []

const reducer = (   state=initialState,
    action) => {
     switch(action.type) {
         case 'products':
             return [...action.payload]
         case 'catagories':
             return [...action.payload]
        
        default:
            return state
     }
}

export default reducer