import { Action, ActionTypes, FilterTypes, IEvent, IState } from "./Types"

export const reducer = (state:IState, action:Action):IState => {
    switch(action.type){
        case ActionTypes.SetEvents:
            return{
                ...state,
                events:action.payload as IEvent[]
            }
            
        case ActionTypes.SetFilter:
            return{
                ...state,
                currentFilter:action.payload as FilterTypes
            }

        case ActionTypes.RemoveEvent:
            return{
                ...state,
                events:state.events.filter(event => event.id !== action.payload)
                
                
            }
     
        default:
            return state
    }
}

// const removeUser = (id:number):void => {
//     setUsers(users.filter(user => user.id !== id))
//   }