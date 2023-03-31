import { useEffect, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Layout from "./components/Layout";
import Navbar from "./features/navbar";
import Tutorials from "./features/tutorials";
import UsefulInfo from "./features/useful-info";
import Youtube from "./features/youtube";
import ToDoList from "./features/to-do-list";
import { useSelector } from "react-redux";
import { useGetLinksQuery, useGetTodoQuery } from "./store/api";
import { updateLinks, updateTodos } from "./store";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const dataLinks = useSelector((state) => state.global.links);
  const dataTodos = useSelector((state) => state.global.todos);
  const { data, isLoading } = useGetLinksQuery();
  const { data: todos, isLoading: isLoadingTodo } = useGetTodoQuery();

  const [tutorials, setTutorials] = useState([]);
  const [usefulInfo, setUsefulInfo] = useState([]);
  const [youtube, setYoutube] = useState([]);
  const [navbar, setNavbar] = useState([]);

  useEffect(() => {
    dispatch(updateLinks(data || []));
  }, [data]);

  useEffect(() => {
    dispatch(updateTodos(todos || []));
  }, [todos]);

  const filterData = (data, category) => {
    return data.filter((el) => el.category === category);
  };

  useEffect(() => {
    const filteredTutorials = filterData(dataLinks, "tutorials");
    const filteredNavbar = filterData(dataLinks, "navbar");
    const filteredUsefulInfo = filterData(dataLinks, "usefulInfo");
    const filteredYoutube = filterData(dataLinks, "youtube");

    setTutorials(filteredTutorials);
    setNavbar(filteredNavbar);
    setYoutube(filteredYoutube);
    setUsefulInfo(filteredUsefulInfo);
  }, [dataLinks]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="app">
        <Navbar data={navbar} />
        {(isLoading || isLoadingTodo) && (
          <p className="mx-auto text-center text-3xl">Loading...</p>
        )}
        <Layout
          section1={{
            left: <Tutorials data={tutorials} />,
            center: <UsefulInfo data={usefulInfo} />,
            right: <Youtube data={youtube} />,
          }}
          section2={<ToDoList data={dataTodos} />}
          footer={"footer"}
        />
      </div>
    </LocalizationProvider>
  );
}

export default App;
