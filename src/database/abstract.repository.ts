/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { AbstractDocument } from "./abstract.schema";
import { Model, Types } from "mongoose";

export abstract class AbstractRepo<TDocument extends AbstractDocument> {

    constructor(protected readonly model: Model<TDocument>) {}

   async create(document: Omit<TDocument, '_id'>): Promise<TDocument> { 
        const createDoc = new this.model({
            ...document,
            _id: new Types.ObjectId
        })

        return (await createDoc.save()).toJSON() as unknown as TDocument
   }
}