import React from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

function TodoInput({ currentTask, handleInputChange, addTask }) {
  return (
    <div className='flex flex-row gap-2 w-full'>
      
      <Input type="text" value={currentTask} onChange={handleInputChange} placeholder="Escribe una Tarea" />
      <Button onClick={addTask} msj="Agregar" />
    </div>
  );
}

export default TodoInput;
