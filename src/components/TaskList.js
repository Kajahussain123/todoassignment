import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTask } from '../store/actions';
import { ListGroup, Button, Row, Col } from 'react-bootstrap';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleEdit = (id) => {
    const updatedTask = prompt("Edit task:");
    if (updatedTask) {
      dispatch(editTask(id, updatedTask));
    }
  };

  const handleToggle = (id) => {
    dispatch(toggleTask(id));
  };

  return (
    <ListGroup>
      {tasks.map(task => (
        <ListGroup.Item key={task.id} className={`d-flex justify-content-between align-items-center ${task.completed ? 'list-group-item-success' : ''}`}>
          <span onClick={() => handleToggle(task.id)} style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}>
            {task.task}
          </span>
          <div>
            <Button variant="warning" className="me-2" onClick={() => handleEdit(task.id)}>Edit</Button>
            <Button variant="danger" onClick={() => handleDelete(task.id)}>Delete</Button>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TaskList;
