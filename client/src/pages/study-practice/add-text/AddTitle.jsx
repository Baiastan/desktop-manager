import React from 'react';
import AltButton from '../../../components/AltButton';

const AddTitle = ({ parentRef }) => {
  const addTitle = (event) => {
    const container = document.createElement('div');

    container.style.width = '80%';
    container.style.marginTop = '20px';
    container.style.border = '1px';

    const header = document.createElement('h1');

    header.style.fontSize = '2rem';
    header.style.color = '#fff';
    header.style.padding = '10px';
    header.style.marginTop = '10px';
    header.style.borderRadius = '5px';
    header.style.textAlign = 'left';

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Type here...';

    input.style.padding = '10px';
    input.style.borderRadius = '5px';
    input.style.border = '1px solid #ccc';
    input.style.width = '300px';
    input.style.boxSizing = 'border-box';
    input.style.fontSize = '1rem';
    input.style.marginTop = '10px';
    input.style.marginBottom = '10px';
    input.style.backgroundColor = '#f8f8f8';
    input.style.color = '#333';
    input.style.outline = 'none';
    input.style.transition = 'border-color 0.3s ease-in-out';

    input.addEventListener('focus', () => {
      input.style.borderColor = '#007bff';
    });
    // Optionally, add some hover styles
    input.addEventListener('mouseover', () => {
      input.style.backgroundColor = '#e6e6e6';
    });
    input.addEventListener('mouseout', () => {
      input.style.backgroundColor = '#f8f8f8';
    });

    input.addEventListener('change', (e) => {
      console.log(e.target.value);

      header.textContent = e.target.value;

      if (container.contains(input)) {
        container.removeChild(input);
        container.appendChild(header);
      }
    });

    if (parentRef.current) {
      parentRef.current.appendChild(container);

      container.appendChild(input);

      //parentRef.current.appendChild(header);
    }

    // header.textContent = 'New Header';
  };

  return (
    <AltButton onClick={addTitle} id="header">
      Add Header
    </AltButton>
  );
};

export default AddTitle;
