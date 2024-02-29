import { Request, Response, NextFunction } from "express";
import { createTask, deleteTask,getTasks,updateTask } from "./userController";


export default [
    {
        path: '/task/create',
        method: 'post',
        handler: [

            async (req: Request, res: Response, next: NextFunction) => {
                try {
                    let result = await createTask(req.body);
                    res.status(200).send(result);
                } catch (error) {
                    console.error('Error saving task:', error);
                    res.status(500).json({ error: 'Failed to create task' });
                }
            }],
    },
    {
        path: '/tasks/getall',
        method: 'get',
        handler: [
            async (req: Request, res: Response, next: NextFunction) => {
                try {
                    let result = await getTasks();
                    res.status(200).send(result);
                } catch (error) {
                    console.error('Error saving task:', error);
                    res.status(500).json({ error: 'Failed to create task' });
                }
            }],
    },
    {
        path: '/task/:id/update',
        method: 'post',
        handler: [

            async (req: Request, res: Response, next: NextFunction) => {
                try {
                    let result = await updateTask(req.params.id,req.body);
                    res.status(200).send(result);
                } catch (error) {
                    console.error('Error saving task:', error);
                    res.status(500).json({ error: 'Failed to create task' });
                }
            }],
    },
    {
        path: '/task/:id/delete',
        method: 'post',
        handler: [
            async (req: Request, res: Response, next: NextFunction) => {
                try {
                    let result = await deleteTask(req.params.id,req.body);
                    res.status(200).send(result); 
                } catch (error) {
                    console.error('Error deleting task:', error);
                    res.status(500).json({ error: 'Failed to delete task' });
                }
            },
        ],
    },
]
