import { ApolloClient, InMemoryCache, gql, FetchResult, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri:"https://tq-template-server-sample.herokuapp.com/graphql"
});

const beginnerToken = "beginner-token"

const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem(beginnerToken);
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

export const login = (email: string, password: string): Promise<void> => {
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
      localStorage.setItem(beginnerToken, result.data.login.token);
    })
    .catch((error) => {
      throw error;
    });
};

interface PaginatedUsersType {
  nodes: string;
}

export const listUsers = async (offSet: number):Promise<PaginatedUsersType[]> => {
  return client 
    .query({
      query: gql `
        query getUsers {
          users(pageInfo: {offset: ${offSet}, limit: ${10}}) {
            nodes {
              name
              email
            }
          }
        }
      `,
    })
    .then((result) => {
      return result.data.users.nodes
    })
    .catch((error)=>{
      console.log(error);
    })
}
