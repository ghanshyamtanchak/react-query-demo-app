import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./views/HomePage/HomePage";

const queryClient = new QueryClient();

const App = () => {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <HomePage />
      </QueryClientProvider>
    </div>
  );
};

export default App;
