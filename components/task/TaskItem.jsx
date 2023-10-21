"use client";

import { Button } from '@nextui-org/button';
import { Checkbox } from '@nextui-org/checkbox';
import { Divider } from '@nextui-org/divider';
import React, { useState } from 'react';
import { CiTrash } from "react-icons/ci";
import { deleteTaskAction } from '@/app/actions';
const TaskItem = ({data, onTaskDeleted} ) => {
  const [task, setTask] = useState(data);
  const [isDeleting, setIsDeleting] = useState(false);

  const onDeleteTask = async () => {
    if (isDeleting) return;
    setIsDeleting(true);

    try {
      await deleteTaskAction({ id: task._id });
      onTaskDeleted(task);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <div className='flex gap-1 items-center justify-between py-6'>
        <Checkbox
          isSelected={task.completed}
          isDisabled={isDeleting}
          onValueChange={(e)=>console.log(e)}
        />
        <div className="flex items-center grow">
          <h5 className={`${task.completed ? "line-through text-gray-300" : "text-gray-700"}`}>
            {task.title}
          </h5>
        </div>
        <Button
          isIconOnly
          color='danger'
          size='sm'
          isLoading={isDeleting}
          onClick={onDeleteTask}
        >
          {!isDeleting && <CiTrash size="1.5em" />}
        </Button>
      </div>
      <Divider className='bg-gray-100' />
    </>
  )
}

export default TaskItem