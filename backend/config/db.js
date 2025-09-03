// import mongoose from "mongoose";
// import { ENV_VARS } from "./envVars.js";

// export const connectDB = async () => {
// 	try {
// 		const conn = await mongoose.connect(ENV_VARS.MONGO_URI);
// 		console.log("MongoDB connected: " + conn.connection.host);
// 	} catch (error) {
// 		console.error("Error connecting to MONGODB: " + error.message);
// 		process.exit(1); // 1 means there was an error, 0 means success
// 	}
// };

import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";

export const connectDB = async () => {
	try {
		console.log("🔍 MONGO_URI from .env:", ENV_VARS.MONGO_URI); // ✅ Debug print

		const conn = await mongoose.connect(ENV_VARS.MONGO_URI);
		console.log("✅ MongoDB connected: " + conn.connection.host);
	} catch (error) {
		console.error("❌ Error connecting to MONGODB: " + error.message);
		process.exit(1);
	}
};

