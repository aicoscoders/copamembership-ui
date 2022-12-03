import { ApolloClient, InMemoryCache } from "@apollo/client";
import { API_URL_GQL } from "../constants/constant";

const client = new ApolloClient({
  uri: API_URL_GQL,
  cache: new InMemoryCache(),
  headers: {
    "Access-Control-Allow-Origin": "*"

  },
});

export default client;