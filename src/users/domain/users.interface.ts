import { BaseDomain } from "src/shared/domain/base.domain";

export interface User extends BaseDomain {
   fullName: string;
   email: string;
   username: string;
   password: string;
}