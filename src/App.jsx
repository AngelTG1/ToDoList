import React, { Component } from 'react';
import TodoInput from './components/molecules/TodoInput';
import TodoList from './components/molecules/TodoList';
import TodoFilter from './components/molecules/TodoFilter';
import ClearCompletedButton from './components/molecules/ClearCompletedButton';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      currentTask: '',
      filter: 'all',
    };
  }

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = () => {
    fetch('http://localhost:3001/tasks')
      .then((response) => response.json())
      .then((tasks) => {
        this.setState({ tasks });
      });
  };

  handleInputChange = (e) => {
    this.setState({ currentTask: e.target.value });
  };

  addTask = () => {
    if (this.state.currentTask.trim() === '') return;
    const newTask = { text: this.state.currentTask, completed: false };

    fetch('http://localhost:3001/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    })
      .then((response) => response.json())
      .then(() => {
        this.setState({ currentTask: '' });
        this.fetchTasks();
      });
  };

  toggleComplete = (id) => {
    const updatedTasks = [...this.state.tasks];
    const taskToUpdate = updatedTasks.find((task) => task.id === id);
    if (taskToUpdate) {
      taskToUpdate.completed = !taskToUpdate.completed;
      fetch(`http://localhost:3001/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskToUpdate),
      })
        .then(() => {
          this.setState({ tasks: updatedTasks });
        });
    }
  };

  clearCompleted = () => {
    const completedTasks = this.state.tasks.filter((task) => task.completed);
    completedTasks.forEach((task) => {
      fetch(`http://localhost:3001/tasks/${task.id}`, {
        method: 'DELETE',
      })
        .then(() => {
          this.fetchTasks();
        });
    });
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { tasks, currentTask, filter } = this.state;

    const filteredTasks = tasks.filter((task) => {
      if (filter === 'active') {
        return !task.completed;
      } else if (filter === 'completed') {
        return task.completed;
      }
      return true;
    });

    return (
      <div className='bg-gray-900 min-h-screen font-inter h-full text-gray-100 flex items-center justify-center py-20 px-5'>
        <div className='container flex flex-col max-w-xl gap-4 py-4'>
        <h1>Todo List</h1>
          <TodoInput
            currentTask={currentTask}
            handleInputChange={this.handleInputChange}
            addTask={this.addTask}
          />
          <TodoList
            tasks={filteredTasks}
            toggleComplete={this.toggleComplete}
          />
          <TodoFilter
            filter={filter}
            changeFilter={this.changeFilter}
          />
          <ClearCompletedButton
            clearCompleted={this.clearCompleted}
          />
        </div>
      </div>
    );
  }
}

export default App;
