import React, { useState } from 'react';

import useSWR from 'swr';
import Header from '../../../components/Header';
import Button from '../../../components/Button';

const fetcher = (url) => fetch(url).then((res) => res.json());

const SWR = () => {
  const [page, setPage] = useState(1);

  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}`,
    fetcher
  );

  if (error) return <div>Error lloading a data</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <Header color="red">SWR (stale-while-revalidated) Example</Header>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous
      </Button>
      <Button onClick={() => setPage(page + 1)}>Next</Button>
    </div>
  );
};

export default SWR;
