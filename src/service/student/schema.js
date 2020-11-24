import * as mongoose from 'mongoose';

export default class studentSchema extends mongoose.Schema{
    constructor(options){
        const studentSchema = {
            id: String,
            name: String,
            email: String
        }
        super ( studentSchema, options ); 
    }
}