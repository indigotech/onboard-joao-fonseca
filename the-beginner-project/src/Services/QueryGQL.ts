import { ApolloClient, InMemoryCache, gql, FetchResult } from "@apollo/client";

export interface LoginType {
  token: string;
}

export const client = new ApolloClient({
  uri: "https://tq-template-server-sample.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

export const mutation = (email: string, password: string): Promise<void> => {
  return client
    .mutate({
      mutation: gql`
        mutation {
          login(data: { email: "${email}", password: "${password}" }) {
            token
          }
        }
      `,
    })
    .then((result: FetchResult<{ login: LoginType }>) => {
      localStorage.setItem("beginner-token", result.data.login.token);
    })
    .catch((error) => {
      throw error;
    });
};
