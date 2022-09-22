import { Schema, model } from 'mongoose';

const userDefaultSchema = new Schema({
  name: {
    type: String,
    // required: true
  },
  lastName: {
    type: String,
    // required: true
  },
  email: {
    type: String,
    // required: true
  },
  password: {
    type: String,
    // required: true
  },
  admin: {
    type: Boolean
  },
  photographer: {
    type: Boolean
  },
  banned: {
    type: Boolean
  },
})

export default userDefaultSchema