import { TaskModel } from "../../interfaces/taskinterface";
import { pubsub } from "../../middleware/task";


export const createTaskInDB = async (body: any) => {

    const requestBody = body;
    const { title, description, dueDate, assignee } = requestBody.variables.input;
    console.log("dxfdf", title, description, dueDate, assignee)
    const task = new TaskModel({ title, description, dueDate, assignee });
    const savedTask = await task.save();
    pubsub.publish('taskAdded', { taskAdded: savedTask });
    return savedTask
}
export const getTasksFromDB = async () => {
    const allTasks = await TaskModel.find()
    return allTasks
}

export const updateTaskInDB = async (id: any, body: any) => {

    const { title, description, dueDate, assignee } = body.variables.input;
    const updatedTask = await TaskModel.findByIdAndUpdate(
        id,
        { title, description, dueDate, assignee },
        { new: true }
    );
    pubsub.publish('taskUpdated', { taskUpdated: updatedTask })

    if (!updatedTask) {
        throw new Error('Task not found');
    }
    console.log('Task updated successfully:', updatedTask);

    return updatedTask

}

export const deleteTaskInDB = async (id: any, body: any) => {
    const taskId = id

    if (!taskId) {
        throw new Error('Task ID is required');
    }
    const deletedTask = await TaskModel.findByIdAndDelete(taskId);
    pubsub.publish('taskDeleted', { taskDeleted: deletedTask });
    if (!deletedTask) {
        return 'Task not found'
    } else {
        console.log('Task deleted successfully:', deletedTask);
        return deletedTask
    }

}