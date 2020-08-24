import { Commercial } from "./commercial.model";

type client = {
  firstname: string;
  lastname: string;
  address: string;
  city: string;
  country: string;
  mail: string;
  password: string;
  commercials: Commercial[];
};
