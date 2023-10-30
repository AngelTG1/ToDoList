import React, { Component } from 'react';
import TodoInput from './components/molecules/TodoInput';
import TodoList from './components/molecules/TodoList';
import TodoFilter from './components/molecules/TodoFilter';
import ClearCompletedButton from './components/molecules/ClearCompletedButton';
import Title from './components/atoms/Title';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      currentTask: '',
      filter: 'all',
    };
  }

  handleInputChange = (e) => {
    this.setState({ currentTask: e.target.value });
  };

  addTask = () => {
    if (this.state.currentTask.trim() === '') return;
    const newTask = { text: this.state.currentTask, completed: false };
    this.setState({
      tasks: [...this.state.tasks, newTask],
      currentTask: '',
    });
  };

  toggleComplete = (index) => {
    const updatedTasks = [...this.state.tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    this.setState({ tasks: updatedTasks });
  };

  clearCompleted = () => {
    const incompleteTasks = this.state.tasks.filter((task) => !task.completed);
    this.setState({ tasks: incompleteTasks });
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
          <Title title="To-Do-List" />
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
