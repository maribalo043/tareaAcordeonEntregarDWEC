import '../estilos/index.css';

// eslint-disable-next-line react/prop-types
export const AccordionItem = ({ question, answer, isActive, onClick }) => {
    const handleClick = () => {
    onClick(question);
    };
    return (
    <li className={`accordion_item ${isActive ? 'active' : ''}`}>
        <button className="button" onClick={handleClick}>
            {question}
            <span className="control">{isActive ? '--' : '+'}</span>
        </button>
        <div className={`answer_wrapper ${isActive ? 'open' : ''}`}>
            <div className="answer">{isActive && <p>{answer}</p>}</div>
        </div>
        </li>
    );
};
