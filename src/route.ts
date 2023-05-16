import {Router}  from 'express';
import { CreateTodo, deleteTodo, getTodo } from './controller/todo.controller';
export const routes= (router : Router) =>{


    router.post('/api/todo',  CreateTodo);
    router.get('/api/todo',  getTodo);
    router.delete('/api/todo/:id',  deleteTodo);

}