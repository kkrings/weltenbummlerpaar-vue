import schema from './schema';

export function validateEnv(vars: Record<string, string>) {
  const { error } = schema.validate(vars);
  if (error) throw error;
}
