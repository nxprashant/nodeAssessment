import * as mongoose from 'mongoose';
import MarksSchema from './schema';

export const marksSchema = new MarksSchema({
    collection: 'marks'
});

export const marksModel = mongoose.model(
    'marks', marksSchema, 'Marks', true);