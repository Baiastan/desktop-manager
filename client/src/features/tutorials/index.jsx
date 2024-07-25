import React, { useState } from 'react';
import AddForm from '../../components/AddFormLinks';
import HeaderWithButton from '../../components/HeaderWithButton';
import List from '../../components/List';
import Modal from '../../components/Modal';

const Tutorials = ({ data }) => {
  const [show, setShow] = useState(false);
  const handleModal = () => {
    setShow(false);
  };

  return (
    <>
      <HeaderWithButton
        title="Tutorials/Youtube"
        addForm={setShow}
        show={show}
      />

      <ul className="mt-5">
        {data.map(({ title, link, text, id }) => (
          <List title={title} link={link} text={text} key={id} id={id} />
        ))}
      </ul>

      <Modal show={show} onRequestClose={handleModal}>
        <AddForm onCloseRequest={handleModal} category="tutorials" />
      </Modal>
    </>
  );
};

export default Tutorials;
