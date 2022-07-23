import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import { BASE_API_URL } from "./services/api.js";

import Layout from "./view/layout/Layout";

function App() {
  useEffect(() => {
    axios.defaults = {
      baseURL: BASE_API_URL,
      headers: {
        post: { "Content-Type": "application/json" },
      },
      responseType: "application/json"
    };
  });
  return <Layout />;
}

export default App;
