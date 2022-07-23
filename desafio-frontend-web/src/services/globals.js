export class ratingBody {
  constructor(rating, name, description = "") {
    this.rating = rating;
    this.name = name;
    this.description = description;
  }
}

const globals = { ratingBody };
export default globals;
