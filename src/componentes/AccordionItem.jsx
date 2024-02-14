import '../estilos/index.css';

// eslint-disable-next-line react/prop-types
export const AccordionItem = ({ question, answer, isActive, haceClick }) => {
    /*Esta funcion es la funcion interna de este componente que llama a la funcion de comparar del componente de Accordion, cada vez que hay un click*/
    const handleClick = () => {
        haceClick(question);
    };

    return (
    <li className={`accordion_item ${isActive ? 'active' : ''}`}>
        <button className="button" onClick={handleClick}>
            {question}
            <span className="control">{isActive ? '--' : '+'}</span>
        </button>
        <div className={`answer_wrapper ${isActive ? 'open' : ''}`}>
            {/*Esto es un poco rarete, consulte un libro, por que no encontraba la forma de hacer que cuando estuviera activo pintara el mensaje, se que no dimos nada parecido en clase*/}
            <div className="answer">{isActive && <p>{answer}</p>}</div>
        </div>
        </li>
    );
};
