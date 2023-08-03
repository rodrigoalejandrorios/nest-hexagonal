import { User } from './users.interface';

export class UserDomain implements User {
  constructor(
    readonly fullName: string,
    readonly username: string,
    readonly email: string,
    readonly password: string,
  ) {}
  static create(params: User) {
    const { fullName, username, email, password } = params;
    return new UserDomain(fullName, username, email, password);
  }

  returnValue() {
    return {
      fullName: this.fullName,
      email: this.email,
      username: this.username,
      password: this.password,
    } as User;
  }
}
