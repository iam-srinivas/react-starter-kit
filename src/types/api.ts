export type APIResponse<T> = {
  payload: T;
  status: 'success' | 'error';
  message?: string;
  error?: string;
};
