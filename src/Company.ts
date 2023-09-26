import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.location.latitude()),
      lng: parseFloat(faker.location.longitude()),
    };
  }

  markerContent(): string {
    return `
      <div>
        <h2>Company Name: ${this.companyName}</h2>
        <h5>Vision: ${this.catchPhrase}</h5>
      </div>
    `;
  }
}
