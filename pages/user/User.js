import { ApolloClient, InMemoryCache } from "@apollo/client";
import { API_URL_GQL } from "../constants/constant";

const User = new ApolloClient({
  uri: API_URL_GQL,
  cache: new InMemoryCache(),
  headers: {
    refferer: "http://localhost:3001/",
  },
});

export default User;