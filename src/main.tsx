import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";

import {
  ApolloClient,
  ApolloProvider,
  gql,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:4000",
  }),
});

// const query = gql`
//   query allPersons {
//     persons {
//       id
//       first_name
//       last_name
//       email
//       gender
//       ip_address
//     }
//   }
// `;

// client.query({ query }).then((response) => {
//   console.log(response.data);
// });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
);
