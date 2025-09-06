export interface BaseResponse<T> {
  success: boolean;
  response: T;
  error: {
    status: number;
    message: string;
  };
}
