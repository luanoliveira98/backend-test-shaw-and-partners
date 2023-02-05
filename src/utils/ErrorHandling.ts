interface IError {
  status: number;
  message: string;
}

class ErrorHandling {
  static throwError({status, message}: IError): void {
    const error = { status, message };
    throw error;
  }
}

export { ErrorHandling }