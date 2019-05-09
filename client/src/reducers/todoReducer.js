import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, FETCH_SUCCESSED} from '../actions/actionTypes';
import { fetchTodosAction, fetchSuccessAction, fetchFaildAction} from '../actions';
const INITIAL_DATA = []

const TodoReducer = (state=INITIAL_DATA, action) => {
    switch (action.type){
        case FETCH_SUCCESSED :
            return action.receivedTodos;
        case FETCH_SUCCESSED :
            return state;

        case ADD_TODO:
            return [
                ...state,{
                    id: action.id,
                    text: action.text,
                    completed: false,
                }
            ];
        break;

        case TOGGLE_TODO:
            return state.map(todo => {
            if(todo.id === action.id) {
                return {...todo, completed: !todo.completed}
            } else {
                return todo;
            }
            // (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo //can't use it
            });
        break;

        case REMOVE_TODO:
            const numIndex = parseInt(action.id);
            return state.filter(todo => todo.id !== numIndex);
        break;

        default:
            return state;
    }
}

export default TodoReducer