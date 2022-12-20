export class User {
  firstName: string | undefined;
  emailId!: string;
  city!: string;
  area!: string;
  plan!: string;
  password!: string;
  constructor() {}
  // constructor(
  //   firstName: string,
  //   emailId: string,
  //   city: string,
  //   area: string,
  //   plan: string,
  //   password: string
  // ) {
  //   this.firstName = firstName;
  //   this.emailId = emailId;
  //   this.city = city;
  //   this.area = area;
  //   this.plan = plan;
  //   this.password = password;
  // }
}
