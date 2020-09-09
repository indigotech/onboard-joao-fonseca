import { ApolloClient, InMemoryCache, gql, FetchResult, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri:"https://tq-template-server-sample.herokuapp.com/graphql"
});

const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem("beginner-token");
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

interface LoginType {
  token: string;
}

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

export const listUsers = async ():Promise<void> => {
  return client 
    .query({
      query: gql `
        query getUsers {
          gets(pageInfo: {offset: ${0}, limit: ${20}}) {
            nodes {
              name
              email
            }
          }
        }
      `,
    })
    .then((result) => {
      const fetchData = result.data.users.nodes
      console.log(fetchData)  
    })
    .catch((error)=>{
      console.log(error);
    })
}
