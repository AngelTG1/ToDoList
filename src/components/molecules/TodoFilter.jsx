import React from 'react';
import Button from '../atoms/Button';

function TodoFilter({ filter, changeFilter }) {
  return (
    <div className='flex flex-row gap-2 w-fullitems-center justify-between'>
      <Button onClick={() => changeFilter('all')} msj="VerTodas" />
      <Button onClick={() => changeFilter('active')} msj="VerActividad" />
      <Button onClick={() => changeFilter('completed')} msj="VerCompletadas" />
    </div>
  );
}

export default TodoFilter;
