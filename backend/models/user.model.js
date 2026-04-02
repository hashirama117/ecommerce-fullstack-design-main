import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String, // Changed to String to represent an email
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true, //created at and updated at
    }
);

const User = mongoose.model("User", userSchema);
//mongoose will handle the pluralization of the model name
export default User;
// This code defines a Mongoose schema and model for a User entity in a MongoDB database. The schema includes fields for name, email, password, and isAdmin status. The model is then exported for use in other parts of the application.
