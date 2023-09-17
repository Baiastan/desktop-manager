import React, { useState } from "react";
import AddForm from "../../components/AddFormLinks";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import List from "../../components/List";

const Youtube = ({ data }) => {
  const [show, setShow] = useState(false);
  const handleModal = () => {
    setShow(false);
  };
  return (
    <>
      <Header title="Trucking App" addForm={setShow} show={show} />
      <ul className="mt-5">
        {data.map(({ title, link, text, id }) => (
          <List title={title} link={link} text={text} key={id} id={id} />
        ))}
      </ul>
      <Modal show={show} onRequestClose={handleModal}>
        <AddForm onCloseRequest={handleModal} category="youtube" />
      </Modal>
    </>
  );
};

export default Youtube;
