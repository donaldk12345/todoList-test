import { Todo } from "../entity/todo";
import { Request, Response } from "express";
import { getManager } from "typeorm";


export const CreateTodo = async (req: Request, res: Response) =>{

    const repository = getManager().getRepository(Todo);

    const {name} = req.body;


    const todos = await repository.save({
        name

    });

    res.status(200).send(todos);

}

export const getTodo = async (req: Request, res: Response) =>{

    const repository = getManager().getRepository(Todo); 

        res.send( await repository.find());

}

export const deleteTodo = async (req: Request, res: Response) =>{

   
    const repository = getManager().getRepository(Todo);

     await repository.delete(req.params.id);

    res.send(null);

}