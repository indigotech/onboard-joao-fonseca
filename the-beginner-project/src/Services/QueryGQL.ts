import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://tq-template-server-sample.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

export const mutation = (email: string, password: string) => {
  client
    .mutate({
      mutation: gql`
        mutation {
          login(data: { email: "${email}", password: "${password}" }) {
            token
          }
        }
      `,
    })
    .then((result: any) => {
      localStorage.setItem("beginner-token", result.data.login.token);
    })
    .catch((err) => {
      throw err;
    });
};
