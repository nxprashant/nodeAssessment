import { marksModel } from './model';
import mongoose from 'mongoose';

export default class MarkRepository {
	constructor() {
		this.marksModel = marksModel;
	}

	static generateObjectId() {
		return String(mongoose.Types.ObjectId());
	}

	create = async (options = {}) => {
		const id = MarkRepository.generateObjectId();
		return this.marksModel.create({
			...options,
			_id: id
		});
	}

	list = async (query = {}, options = {}) => {
		return this.marksModel.find(query, {}, options);
	}

	update = async (id, dataToUpdate = {}) => {
		return this.marksModel.findOneAndUpdate({ _id: id }, dataToUpdate, { new: true });
	}

	delete = async (id) => {
		return this.marksModel.findOneAndDelete({ _id: id });
	}

	get = async (data) => {
		return this.marksModel.findOne({ ...data }).lean();
	}
}