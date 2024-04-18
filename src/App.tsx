import './App.css';
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from 'react-query';
import Router from 'router';
import { BrowserRouter } from 'react-router-dom';
import { createContext, useState } from 'react';
import { IFilter } from 'models/IFilter';
import { UserContext } from 'helpers/context';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Root />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
export default App;
const Root = (_props: any) => {
  const [searchFilters, setSearchFilters] = useState<IFilter>({});

  return (
    <UserContext.Provider value={{
      setSearchFilters: setSearchFilters,
      searchFilters: searchFilters,
    }}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </UserContext.Provider>
  )
}