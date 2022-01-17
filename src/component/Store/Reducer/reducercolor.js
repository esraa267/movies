const initial ={
   
    color:"text-warning"
}
export default function reducrecolor(state=initial,action){
    switch(action.type){
        case"SET_COLOR":
        return {...state,color:action.payload}
            
      
    
        default:
            return state
    }

}