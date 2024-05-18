import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./Context/Context.jsx";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <Auth0Provider
      domain="dev-mza47f5nwdgc35em.us.auth0.com"
      clientId="Alh4P6wMjmVg5o68RRkgoAdLJIY5FNSU"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      useRefreshTokens={true}
      cacheLocation="localstorage"
    >
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </React.StrictMode>
      
    </Auth0Provider>
  </UserProvider>
);
