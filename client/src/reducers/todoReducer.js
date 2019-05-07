import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from '../actions/actionTypes';

const INITIAL_DATA = []

const TodoReducer = (state=INITIAL_DATA, action) => {
    switch (action.type){

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