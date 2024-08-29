import mongoose from "mongoose";

mongoose.Schema.Types.String.set("validate", {
  validator: (stringValue) => stringValue.trim() !== "",
  message: ({ path }) => `${path} field was provided with Blank`,
});
