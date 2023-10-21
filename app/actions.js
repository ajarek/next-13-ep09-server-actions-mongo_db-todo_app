"use server";

import { MongooseClient } from "@/libs/mongoose.lib";
import Task from "@/models/task.model";

export const addTaskAction = async ({ title }) => {
  try {
    await MongooseClient();

    const newTask = await Task.create({ title });

    return {
      newTask: JSON.parse(JSON.stringify(newTask))
    };
  } catch (err) {
    throw err;
  }
};

export const getTaskAction = async () => {
  try {
    await MongooseClient();

    const tasks = await Task.find().sort("-created");

    return JSON.parse(JSON.stringify(tasks));
  } catch (err) {
    throw err;
  }
};
export const deleteTaskAction = async ({ id }) => {
  try {
    await MongooseClient();

    await Task.findOneAndDelete(id);

    return { success: true };
  } catch (err) {
    throw err;
  }
};