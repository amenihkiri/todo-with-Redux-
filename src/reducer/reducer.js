import { ADD_TASK, DELETE_TASK, COMPLETE_TASK } from "../constants/actionsTypes"



const initialState=[{text:"hello",id:Math.random(),isComplete:false},
{text:"hello",id:Math.random(),isComplete:false}]


const TodoReducer=(state=initialState, action)=>{

switch(action.type){
    case ADD_TASK:
        return state.concat(action.payload)


        case DELETE_TASK:
            return state.filter(el=> el.id !== action.payload)


case COMPLETE_TASK:
    return state.map(el=> el.id=== action.payload ? {...el,isComplete:!el.isComplete}: el)

        default:
            return state
}


}
export default TodoReducer