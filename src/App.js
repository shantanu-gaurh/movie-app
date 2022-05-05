import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import "./App.css";
import Container from "./components/Container";

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Container />
      </QueryClientProvider>
    </div>
  );
}

export default App;
