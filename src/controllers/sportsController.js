import { ObjectId } from 'mongodb';
import db from '../config/dbConnect.js';

export async function getSportById(req, res) {
    const { id } = req.params;
    try {
        const sport = await db
            .collection('sports')
            .findOne({ _id: ObjectId(id) });
        res.status(200).json(sport);
    } catch (error) {
        res.status(500).send(error);
    }
}

export async function getSports(req, res) {
    try {
        const sports = await db.collection('sports').find().toArray();
        res.status(200).json(sports);
    } catch (error) {
        res.status(500).send(error);
    }
}

export async function createSport(req, res) {
    const { name, description } = req.body;
    try {
        const sport = await db
            .collection('sports')
            .insertOne({ name, description });
        res.status(201).send(sport);
    } catch (error) {
        res.status(500).send(error);
    }
}
