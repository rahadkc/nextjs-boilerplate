import mongoose, { Schema } from "mongoose";

mongoose.Promise = global.Promise;

enum Role {
  ADMIN = "admin",
  USER = "user",
  EDITOR = "editor",
}

// Define the User interface to represent the document structure
export interface User extends Document {
  username: string;
  email: string;
  password: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
}

// Define the schema for the User model
const userSchema = new Schema<User>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }, // Automatically add createdAt and updatedAt fields
);

// Create and export the User model
// Check if the model is already registered

export default (mongoose.models.User as mongoose.Model<User>) ||
  (mongoose.model<User>("User", userSchema) as mongoose.Model<User>);

// (mongoose.models.User as mongoose.Model<User>) || mongoose.model('User', userSchema);

// export interface User {
//   username: string;
//   password: string;
// }

// const schema = new mongoose.Schema<User>({
//   username: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// });

// export default (mongoose.models.User as mongoose.Model<User>) || mongoose.model("User", schema);
