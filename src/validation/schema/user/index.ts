import { boolean, object, string } from 'yup';
import type { InferType } from 'yup';

export const userSchema = object().shape({
  avatar: string().nullable(),
  email: string().required(),
  isNew: boolean().default(false),
  password: string().when('isNew', {
    is: true,
    then: (schema) => schema.required()
  })
});

export type UserRequest = InferType<typeof userSchema>;
