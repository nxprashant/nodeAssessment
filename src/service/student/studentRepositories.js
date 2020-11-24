import { studentModel } from './model';
import mongoose from 'mongoose';

export default class StudentRepository {
	constructor() {
		this.studentModel = studentModel;
	}

	static generateObjectId() {
		return String(mongoose.Types.ObjectId());
	}

	create = async (options = {}) => {
		console.log(options)
		const id = StudentRepository.generateObjectId();
		return this.studentModel.create({
			...options,
			_id: id
		});
	}

	list = async (query = {}, options = {}) => {
		return this.studentModel.find(query, {}, options);
	}

	update = async (id, dataToUpdate = {}) => {
		return this.studentModel.findOneAndUpdate({ _id: id }, dataToUpdate, { new: true });
	}

	delete = async (id) => {
		return this.studentModel.findOneAndDelete({ _id: id });
	}

	get = async (data) => {
		return this.studentModel.findOne({ ...data }).lean();
	}
	high=async()=>{
		
	}
}