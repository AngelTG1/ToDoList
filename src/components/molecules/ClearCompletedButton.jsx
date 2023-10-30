import React from 'react';
import Button from '../atoms/Button';

function ClearCompletedButton({ clearCompleted }) {
  return (
    <Button onClick={clearCompleted} msj="Limpiar Completadas" />
  );
}

export default ClearCompletedButton;
