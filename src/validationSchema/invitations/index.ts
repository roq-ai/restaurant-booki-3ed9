import * as yup from 'yup';

export const invitationValidationSchema = yup.object().shape({
  role: yup.string().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable(),
  restaurant_id: yup.string().nullable(),
});
