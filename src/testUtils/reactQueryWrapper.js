import { QueryClient, QueryClientProvider } from 'react-query'

const reactQueryWrapper = () => {
  const queryClient = new QueryClient();
  return ({ children }) => (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
};

export default reactQueryWrapper
