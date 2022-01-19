const arr=[];
    export default function reducerfavorite(state=arr,action){
        switch(action.type){
            case"SET_FAVORITE":          
             return [...state,action.payload]
             case "REMOVE_FAVORITE":
                 return state.filter((x)=>x.id!=action.payload.id)
            default:
                return state
        }
    
    }
   