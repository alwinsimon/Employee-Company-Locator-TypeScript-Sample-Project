import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.person.firstName();
    this.location = {
      lat: parseFloat(faker.location.latitude()),
      lng: parseFloat(faker.location.longitude()),
    };
  }

  markerContent(): string {
    return `
      <div>
        <h2>Employee Name: ${this.name}</h2>
      </div>
    `;
  }
}
