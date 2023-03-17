/**
 * CustomError class extends the built-in Error class to create custom errors
 * that can hold a specific status code and a message.
 */
export class CustomError extends Error {
  public status: number;

   /**
   * Constructor for the CustomError class.
   * @param message - A string message that describes the error.
   * @param status - A number that represents the HTTP status code to return for the error.
   */
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  /**
   * toJSON method returns a JSON object that represents the error.
   * It includes a message property with the error message, and a statusCode property
   * with the HTTP status code for the error.
   * @returns A JSON object with message and statusCode properties.
   */
  toJSON() {
    return {
      message: this.message,
      statusCode: this.status,
    };
  }
}