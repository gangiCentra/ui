import React from 'react';

function Badge({ type, message, onClose }) {
  return (
    <div className={`badge ${type}`}>
      <span>{message}</span>
      <button onClick={onClose}>X</button>
    </div>
  );
}

export default Badge;