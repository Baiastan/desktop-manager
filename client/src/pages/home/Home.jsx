import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { useGetLinksQuery, useGetTodoQuery } from '../../store/api';
import { updateLinks, updateTodos } from '../../store';
import { filterData } from '../../../utils/filter-data-by-category';

import Layout from '../../components/Layout';
import Tutorials from '../../features/tutorials';
import UsefulInfo from '../../features/useful-info';
import Youtube from '../../features/youtube';
import ToDoList from '../../features/to-do-list';
import FileLoader from '../../features/pdf-parser/FileLoader';

function Home() {
  const dispatch = useDispatch();
  const dataLinks = useSelector((state) => state.global.links);
  const dataTodos = useSelector((state) => state.global.todos);
  const { data, isLoading } = useGetLinksQuery();
  const { data: todos, isLoading: isLoadingTodo } = useGetTodoQuery();

  const [tutorials, setTutorials] = useState([]);
  const [usefulInfo, setUsefulInfo] = useState([]);
  const [youtube, setYoutube] = useState([]);

  useEffect(() => {
    dispatch(updateLinks(data || []));
  }, [data]);

  useEffect(() => {
    dispatch(updateTodos(todos || []));
  }, [todos]);

  useEffect(() => {
    const filteredTutorials = filterData(dataLinks, 'tutorials');
    const filteredUsefulInfo = filterData(dataLinks, 'usefulInfo');
    const filteredYoutube = filterData(dataLinks, 'youtube');

    setTutorials(filteredTutorials);
    setYoutube(filteredYoutube);
    setUsefulInfo(filteredUsefulInfo);
  }, [dataLinks]);

  return (
    <Layout
      section1={{
        left: <Tutorials data={tutorials} />,
        center: <UsefulInfo data={usefulInfo} />,
        right: <Youtube data={youtube} />,
      }}
      section2={<ToDoList data={dataTodos} />}
      footer={<FileLoader />}
    />
  );
}

export default Home;
