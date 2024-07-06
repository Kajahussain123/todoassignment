import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/actions';
import { Form, Button } from 'react-bootstrap';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTask(task));
      setTask('');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="d-flex mb-3">
      <Form.Control
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task"
        className="me-2"
      />
      <Button type="submit" variant="primary">Add Task</Button>
    </Form>
  );
};

export default TaskInput;
