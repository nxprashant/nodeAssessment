import * as mongoose from 'mongoose';

export default class marksSchema extends mongoose.Schema{
    constructor(options){
        const marksSchema = {
            firstRound: Number,
            secondRound: Number,
            thirdRound: Number
        }
        super ( marksSchema, options ); 
    }
}