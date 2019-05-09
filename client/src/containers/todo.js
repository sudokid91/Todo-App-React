import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';
import { fetchTodosAction, fetchSuccessAction, fetchFaildAction} from '../actions';
import {bindActionCreators} from 'redux';

class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {
            todotext: '',
        }
        this.onChangeTodoText = this.onChangeTodoText.bind(this)
    }

    onChangeTodoText(e){
        this.setState({
            todotext: e.target.value
        })
    }

    render(){
        return (
                  <div className="form-group row">
                    <div className="col-sm-10">
                      <input onChange={this.onChangeTodoText} value={this.state.todotext} type="text" className="form-control" id="inputEmail3" placeholder="add todo here"/>
                      <button type="button" onClick={() =>{ this.props.fetchTodosAction('asc')} } style={{marginTop: "25px"}} className="btn btn-success">Fetch todos</button>
                      <button type="button" onClick={() =>{ this.props.addTodo(this.state.todotext); this.setState({ todotext: '' }) } } style={{marginTop: "25px"}} className="btn btn-success">Add Todo</button>
                      <button type="button" onClick={ () => this.setState({ todotext: '' }) } style={{marginTop: "25px", marginRight: "15px"}} className="btn btn-danger">Cancel</button>
                    </div>
                  </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addTodo,
        fetchTodosAction
    }, dispatch)
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//       onFetchTodos: () => {
//         dispatch(fetchTodosAction());
//       }
//     }
//   }


export default connect(null, mapDispatchToProps)(Todo)