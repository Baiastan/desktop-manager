import { useId, useState } from 'react';

import './Accordion.css';

const sections = [
  {
    value: 'html',
    title: 'HTML',
    contents:
      'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
  },
  {
    value: 'css',
    title: 'CSS',
    contents:
      'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.',
  },
  {
    value: 'javascript',
    title: 'JavaScript',
    contents:
      'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
  },
];

export default function Accordion() {
  const [openSections, setOpenSections] = useState(new Set());
  const accordionId = useId();

  const focusOnSection = (index) => {
    const value = sections[index].value;

    document.getElementById(`${accordionId}-${value}`).focus();
  };

  const handleKeyDown = (event) => {
    const activeItemValue = document.activeElement.getAttribute(
      'data-accordion-value'
    );

    if (activeItemValue === null) {
      return;
    }

    switch (event.code) {
      case 'ArrowUp': {
        const index = sections.findIndex(
          ({ value: itemValue }) => itemValue === activeItemValue
        );

        focusOnSection((index - 1 + sections.length) % sections.length);
        break;
      }

      case 'ArrowDown': {
        const index = sections.findIndex(
          ({ value: itemVale }) => itemVale === activeItemValue
        );

        focusOnSection((index + 1 + sections.length) % sections.length);
        break;
      }

      case 'KeyH': {
        focusOnSection(0);
        break;
      }

      case 'KeyE': {
        focusOnSection(sections.length - 1);
        break;
      }

      default:
        break;
    }
  };

  return (
    <div className="accordion" onKeyDown={handleKeyDown}>
      {sections.map(({ value, title, contents }) => {
        const isExpanded = openSections.has(value);

        return (
          <div className="accordion-item" key={value}>
            <button
              aria-expanded={isExpanded}
              aria-controls={value}
              id={`${accordionId}-${value}`}
              data-accordion-value={value}
              className="accordion-item-title"
              type="button"
              onClick={() => {
                const newOpenSections = new Set(openSections);
                newOpenSections.has(value)
                  ? newOpenSections.delete(value)
                  : newOpenSections.add(value);
                setOpenSections(newOpenSections);
              }}
            >
              {title}
              <span
                aria-hidden={true}
                className={[
                  'accordion-icon',
                  isExpanded && 'accordion-icon--rotated',
                ]
                  .filter(Boolean)
                  .join(' ')}
              />
            </button>
            <div
              className="accordion-item-contents"
              hidden={!isExpanded}
              id={value}
              role="region"
              aria-labelledby={value}
            >
              {contents}
            </div>
          </div>
        );
      })}
    </div>
  );
}
