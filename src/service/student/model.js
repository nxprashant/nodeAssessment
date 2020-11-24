import * as mongoose from 'mongoose';
import StudentSchema from './schema';

export const studentSchema = new StudentSchema({
    collection: 'student'
});

export const studentModel = mongoose.model(
    'student', studentSchema, 'Students', true);