import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <ul className="list-group my-5">
        {items.length > 0 ? (
          <h3 className="text-capitalize text-center">todo list</h3>
        ) : (
          <h3 className=" text-center">
            List is currently empty, please add todos!
          </h3>
        )}
        {items.map((item) => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}

        {items.length > 0 && (
          <button
            className="btn btn-danger btn-block text-uppercase mt-5"
            onClick={clearList}
          >
            clear list
          </button>
        )}
      </ul>
    );
  }
}

export default TodoList;
