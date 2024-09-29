import React from 'react';
import withLoader from './withLoader';
import Header from '../../components/Header';
import CodeSnippet from '../../components/CodeSnippet';

const DataLoadingWithHoc = ({ data }) => {
  return (
    <div>
      <Header>Data Loading with HOC</Header>
      <p>
        {data.map((post, index) => {
          if (index > 4) {
            return;
          }
          return (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          );
        })}
      </p>
      <br />

      <Header>Hoc Component</Header>
      <CodeSnippet>
        {`
            import React, { useEffect, useState } from 'react';

            const withLoader = (Element, url) => {
              return (props) => {
                const [data, setData] = useState(null);
            
                useEffect(() => {
                  const getData = async () => {
                    const res = await fetch(url);
                    const data = await res.json();
                    setData(data);
                  };
                  getData();
                }, []);
            
                if (!data) {  
                  return <div>...Loading</div>;
                }
            
                return <Element {...props} data={data} />;
              };
             };
            
            export default withLoader;`}
      </CodeSnippet>
      <Header>The usage of Hoc Component</Header>
      <CodeSnippet>
        {`
        import React from 'react';
        import withLoader from './withLoader';
        import Header from '../../components/Header';
        
        const DataLoadingWithHoc = ({ data }) => {
          return (
            <div>
              <Header>Data Loading with HOC</Header>
              <p>
                {data.map((post) => {
                  return (
                    <div key={post.id}>
                      <h2>{post.title}</h2>
                      <p>{post.body}</p>
                    </div>
                  );
                })}
              </p>    
            </div>
          );
        };
        
        export default withLoader(
          DataLoadingWithHoc,
          'https://jsonplaceholder.typicode.com/posts?_page=1'
        );
        
        
        `}
      </CodeSnippet>
    </div>
  );
};

export default withLoader(
  DataLoadingWithHoc,
  'https://jsonplaceholder.typicode.com/posts?_page=1'
);
