import Joi from 'joi';

interface Schema {
  WELTENBUMMLERPAAR_FRONTEND_API_BASE_URL: string;
  WELTENBUMMLERPAAR_FRONTEND_IMG_BASE_URL: string;
}

const schema = Joi.object<Schema>({
  WELTENBUMMLERPAAR_FRONTEND_API_BASE_URL: Joi.string().uri().required(),
  WELTENBUMMLERPAAR_FRONTEND_IMG_BASE_URL: Joi.string().uri().required(),
});

export function validateEnv(vars: Record<string, string>) {
  const { error } = schema.validate(vars);
  if (error) throw error;
}
