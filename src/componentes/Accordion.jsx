/* eslint-disable react/prop-types */
import { useState } from 'react';
import { AccordionItem } from './AccordionItem';
/*Componete en el cual se agrupan los AccordionItem*/
export const Accordion = ({ items }) => {
    /*Un hook para poder saber si el AccordionItem esta abierto o no(no lo esta por defecto) */
    const [itemActivo, setItemActivo] = useState(null);
    const handleItemClick = (question) => {
        /*Revisa que esten cerrados y sino lo abre */
        setItemActivo((itemActivo) => {
            if (itemActivo === question) {
                return 'No es igual';
            } else {
                return question;
            }
            });
        };
        /*question es pregunta que viene de el json*/
        /*answer es la pregunta*/
        /*isActive compara la pregunta del item que esta activo con la de la pregunta que acaba de entrar al clickar*/
        /*on click es lo que sucede cuando se da click que llama a la funcion de arriba que compara a ver si es igual o no */
    return ( 
    <ul className="accordion">
    {items.map((item) => (
        <AccordionItem
            key={item.id}
            question={item.pregunta}
            answer={item.respuesta}
            isActive={itemActivo === item.pregunta}
            haceClick={handleItemClick}
        />
    ))}
  </ul>
  );
};

