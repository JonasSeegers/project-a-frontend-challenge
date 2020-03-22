/**
 * I like to use classes for Services because it makes the code more readable in place where
 * the Service is used, for example LoginService.login() hints that there is an API call behind
 * this function, while login() doesn't necessarily
 */
export class LoginService {
  /**
   * This is a dummy login function that could be used to make an API called based on email and password
   * @param email
   * @param password
   */
  public static async login(email: string, password: string) {
    alert(`Hello ${email}`);
  }
}
