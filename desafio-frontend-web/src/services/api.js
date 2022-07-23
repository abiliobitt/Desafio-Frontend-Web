import axios from "axios";
import { ratingBody } from "./globals";

export const BASE_API_URL =
  "https://desafio-frontend-serasa.free.beeceptor.com";
export const API_RATING = "/rating";

export function ratingPOST(
  rating,
  name,
  comment,
  setProcessing,
  setSuccessful,
  setError
) {
  let body = new ratingBody(rating, name, comment);
  axios
    .post(`${BASE_API_URL}${API_RATING}`, JSON.stringify(body), {
      headers: {
        "Content-Type": "application/json",
      },
      responseType: "application/json",
    })
    .then(() => {
      setTimeout(() => {
        setProcessing(false);
      }, 200);
      setTimeout(() => {
        setSuccessful(true);
      }, 200);
      setTimeout(() => {
        setSuccessful(false);
        window.location.reload();
      }, 3000);
      return;
    })
    .catch(() => {
      setProcessing(false);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    });
}

const api = { BASE_API_URL, API_RATING, ratingPOST };
export default api;
