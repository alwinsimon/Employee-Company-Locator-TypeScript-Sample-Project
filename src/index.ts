/// <reference types="@types/google.maps" />

import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user1 = new User();
const company1 = new Company();

console.log(user1);
console.log(company1);

new CustomMap('map');