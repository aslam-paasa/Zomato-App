import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        fullName: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        address: [{ detail: {type: String}, for: {type: String}}],
        phoneNumber: [{type: Number}],
    },
    {
        timestamps: true,
    },
);

/**
 * Attachments
*/
UserSchema.methods.generateJwtToken = function() {};

/**
 * Helper Functions
*/
UserSchema.statics.findByEmailAndPhone = async () => {};
UserSchema.statics.findByEmailAndPassword = async () => {};

export const UserModel = mongoose.model("users", UserSchema);