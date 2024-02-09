import { Header } from "../src/componentes/Header";
import { Accordion } from "../src/componentes/Accordion";
import { data } from "../src/data/data.json";

export const App = () => {
    return (
        <div className="container">
        <Header/>
        <Accordion items={data}/>
        </div>
    );
};

