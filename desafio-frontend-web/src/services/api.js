export const BASE_API_URL = "https://desafio-frontend-serasa.free.beeceptor.com";
export const API_RATING = "/rating";

export class ratingBody {
    constructor(rating, name, description=""){
        this.rating = rating;
        this.name = name;
        this.description = description;
    }
}

export default {BASE_API_URL, API_RATING, ratingBody};