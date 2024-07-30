import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todoList: PropTypes.array
};

TodoList.deafaultProps = {
    todoList: []
}

function TodoList(props) {
    const { } = props;
    return (
        <ul>
            {
                props.todoList.map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                ))
            }
        </ul>
    );
}

export default TodoList;