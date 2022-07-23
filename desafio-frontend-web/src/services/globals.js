export class ratingBody {
  constructor(rating, name, comment = "") {
    this.rating = rating;
    this.name = name;
    this.comment = comment;
  }
}

const globals = { ratingBody };
export default globals;
