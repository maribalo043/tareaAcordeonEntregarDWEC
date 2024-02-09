/* eslint-disable react/prop-types */
import { useState } from 'react';
import { AccordionItem } from './AccordionItem';

export const Accordion = ({ items }) => {
    const [itemActivo, setItemActivo] = useState(null);
    const handleItemClick = (question) => {
        setItemActivo((itemActivo) => {
            if (itemActivo === question) {
                return 'No es igual';
            } else {
                return question;
            }
            });
        };
    return (
    <ul className="accordion">
    {items.map((item) => (
        <AccordionItem
            key={item.id}
            question={item.pregunta}
            answer={item.respuesta}
            isActive={itemActivo === item.pregunta}
            onClick={handleItemClick}
        />
    ))}
  </ul>
  );
};

