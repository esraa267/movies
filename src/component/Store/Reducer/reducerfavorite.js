const arr=[];
    export default function reducerfavorite(state=arr,action){
        switch(action.type){
            case"SET_FAVORITE":
            
       //  return state.concat(action.payload)
             return [...state,action.payload]
            default:
                return state
        }
    
    }
   