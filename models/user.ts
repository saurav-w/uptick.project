import mongoose, {
  Schema,
  model,
  models,
  type HydratedDocument,
} from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser {
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;

  comparePassword(candidatePassword: string): Promise<boolean>;
}

type UserDocument = HydratedDocument<IUser>;

const UserSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre<UserDocument>("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

    next();
  } catch (error) {
    next(error as Error);
  }
});

UserSchema.methods.comparePassword = async function (
  candidatePassword: string
) {
  return bcrypt.compare(candidatePassword, this.password);
};

const User =
  models.User || model<IUser>("User", UserSchema);

export default User;