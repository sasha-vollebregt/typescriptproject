/**
 * CustomError class extends the built-in Error class to create custom errors
 * that can hold a specific status code and a message.
 */
export class CustomError extends Error {
  private _status: number;

   /**
   * Constructor for the CustomError class.
   * @param message - A string message that describes the error.
   * @param status - A number that represents the HTTP status code to return for the error.
   */
  constructor(message: string, status: number) {
    super(message);
    this._status = status;
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  /**
   * Getter for the status property.
   * Returns the current value of the _status property.
   */
  get status(): number {
    return this._status;
  }

  /**
   * Setter for the status property.
   * Sets the value of the _status property, after performing some validation checks.
   * @param newNumber - The new value to set for the status property.
   */
  set status(newNumber: number) {
    if (newNumber < 0) {
      this._status = 500;
    } else {
      this._status = newNumber;
    }
  }
}