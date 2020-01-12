import { MongoClient } from 'mongodb';
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/m6sdb';
let db = null;

export async function connectDB () {
	if (db) return db;
	try {
		let client = await MongoClient.connect(url, {
			useNewUrlParser    : true,
			useUnifiedTopology : true
		});
		db = client.db();
		console.info('Got DB,', db);
		return db;
	} catch (error) {
		console.log(error);
	}
}

// connectDB();
