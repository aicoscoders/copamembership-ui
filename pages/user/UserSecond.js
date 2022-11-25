import { ApolloClient, InMemoryCache } from "@apollo/client";
import { API_URL_GQL } from "../constants/constant";

const UserSecond = new ApolloClient({
  uri: API_URL_GQL,
  cache: new InMemoryCache(),
});

export default UserSecond;