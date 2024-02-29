import { createTaskInDB, deleteTaskInDB, getTasksFromDB, updateTaskInDB } from "./userModel";


export const createTask = async (body: any) => { 
    return await createTaskInDB(body);
}

export const getTasks = async () => { 
  return await getTasksFromDB();
}
export const updateTask = async (id:any,body: any) => {
  return await updateTaskInDB(id,body);
}
export const deleteTask = async (id:any,body: any) => {
  return await deleteTaskInDB(id,body);
}


