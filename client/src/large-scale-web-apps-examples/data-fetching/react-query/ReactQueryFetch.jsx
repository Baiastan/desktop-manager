import React from 'react';
import { useQuery, useMutation } from 'react-query';
import axios from 'axios';
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from '../../../components/Header';
import Button from '../../../components/Button';

const queryClient = new QueryClient();

const fetchPosts = async () => {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/posts?_page=1'
  );

  return data;
};

const mockApiCall = () => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts?_page=1'
      );

      if (!data) {
        reject({ message: 'Something went wrong' });
      } else {
        resolve(data);
      }
    }, 2000);
  });
};
//simple fetch
const ReactQueryFetch = () => {
  const { data, error, isLoading, isError } = useQuery('posts', fetchPosts);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <Header color="red">React Query Simple Fetch</Header>
      <h1>Posts</h1>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </div>
  );
};

//Triggeing a mutation to add a new tot item

const createTodo = async (newTodo) => {
  const response = await axios.post(
    'https://jsonplaceholder.typicode.com/todos',
    newTodo
  );

  return response.data;
};

const ReactQueryFetchMutation = () => {
  const { mutate, isLoading, isError, data } = useMutation({
    mutationFn: createTodo,
  });

  const triggerTodo = () => {
    mutate({
      title: 'Groceries',
      description: 'Complete the weekly grocery run',
    });
  };

  return (
    <div>
      <Header color="red">React Query Mutation Example</Header>
      <Button onClick={triggerTodo}>Add Todo</Button>
      {isLoading && <p>Adding Todo</p>}
      {isError && <p>oh, something went wrong!</p>}
      {data && (
        <div>
          <h3>{data?.title}</h3>
          <p>{data?.description}</p>
        </div>
      )}
    </div>
  );
};

const ReactQueryPlaceholderDataOption = () => {
  const { data, error, isLoading } = useQuery('posts', mockApiCall, {
    placeholderData: [
      { id: 1, title: 'Loading post 1' },
      { id: 2, title: 'Loading post 2' },
      { id: 3, title: 'Loading post 3' },
      { id: 4, title: 'Loading post 4' },
      { id: 5, title: 'Loading post 5' },
    ],
  });

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <Header color="red">Reac Query PlaceholderData Option</Header>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

//Configuring the staleTime option
const ReactQueryFetchStaleTime = () => {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5, // 5 minutes - if 5 minutes passed after last request call, on the next request it will fetch from api
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <Header color="red">React Query Simple Fetch</Header>
      <h1>Posts</h1>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </div>
  );
};

const ReactQuery = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryPlaceholderDataOption />
      <ReactQueryFetchMutation />
      <ReactQueryFetch />
    </QueryClientProvider>
  );
};

export default ReactQuery;
