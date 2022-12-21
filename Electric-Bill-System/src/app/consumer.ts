import { Rate } from './rate';

export class Consumer {
  consumerName!: string;
  email!: string;
  city!: string;
  area: string | undefined;
  planType: Rate = new Rate();
  password!: string;
  constructor() {}

  // setvalues(
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
