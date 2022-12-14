import { Request, Response } from 'express';
const client = require('../database');
import { QueryResult } from 'pg';
export namespace AnimalController {
export const getAnimal = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await
            client.query('SELECT * FROM Animals');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
};

export const getAnimalById = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const response: QueryResult = await client.query('SELECT * FROM Animals WHERE id = $1', [id]);
    return res.json(response.rows);
};

export const createAnimal = async (req: Request, res: Response) => {
    const { name, breed } = req.body;
    const response = await client.query('INSERT INTO Animals (name, breed) VALUES ($1, $2)', [name, breed]);
    res.json({
        message: 'Animal Added successfully',
        body: {
            Animals: { name, breed}
        }
    })
};

export const updateAnimal = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { name, breed } = req.body;

    const response = await client.query('UPDATE Animals SET name = $1, breed = $2 WHERE id = $3', [
        name,
        breed,
        id
    ]);
    res.json('Updated Successfully');
};

export const deleteAnimal = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    await client.query('DELETE FROM Animals where id = $1', [
        id
    ]);
    res.json(`User ${id} deleted Successfully`);
};

}