import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddForm from '../../components/AddFormLinks';
import DeleteForm from '../../components/DeleteForm';
import Modal from '../../components/Modal';
import { updateLinks } from '../../store';
import { useGetLinksQuery } from '../../store/api';
import { filterData } from '../../../utils/filter-data-by-category';
import NavigationItem from './NavigationItem';

const navLinks = [
  {
    to: '/',
    text: 'Home',
    exact: true,
  },
  {
    to: '/job-market',
    text: 'Job Market',
  },
  {
    to: '/practice',
    text: 'Practice',
  },
];

const Navbar = () => {
  const dataLinks = useSelector((state) => state.global.links);
  const dispatch = useDispatch();
  const [navbar, setNavbar] = useState([]);
  const [show, setShow] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const { data, isLoading } = useGetLinksQuery();
  const handleModal = () => {
    setShow(false);
  };

  useEffect(() => {
    dispatch(updateLinks(data || []));
  }, [data]);

  useEffect(() => {
    const filteredNavbar = filterData(dataLinks, 'navbar');

    setNavbar(filteredNavbar);
  }, [dataLinks]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full mx-auto h-full flex justify-start px-5 mt-5">
      <ul className="font-playfair ss:w-4/5 mx-auto w-full flex flex-wrap items-center md:justify-between gap-5">
        {navLinks.map((navLink, index) => (
          <NavigationItem
            key={`${index}-${navLink.text}`}
            text={navLink.text}
            to={navLink.to}
          />
        ))}

        {navbar.map((el) => {
          return (
            <li
              key={el.id}
              onMouseEnter={() => setDeleteId(el.id)}
              onMouseLeave={() => setDeleteId(null)}
              className="hover:text-yellow-300 text-blue-hover flex transition pt-3 px-5 md:p-0 duration-500 "
            >
              <a href={el.link} target="_blank" rel="noreferrer">
                {el.title}
              </a>
              {deleteId === el.id && <DeleteForm id={el.id} type="links" />}
            </li>
          );
        })}

        <li className="hover:text-blue-hover text-yellow-300  transition duration-500 py-5">
          <button onClick={() => setShow(!show)} className="text-2xl">
            +
          </button>
        </li>
      </ul>

      <Modal show={show} onRequestClose={handleModal}>
        <AddForm onCloseRequest={handleModal} category="navbar" />
      </Modal>
    </div>
  );
};

export default Navbar;
