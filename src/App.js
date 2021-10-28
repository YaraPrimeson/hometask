import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Main from "./Pages/Main/Main";
import Square from "./Pages/Square/Square";
import Header from "./Componets/Header/Header";
import {Context} from "./Context/Context";
import {useState} from "react";


function App() {

    const [figure, setFigure] = useState("square");
    const [color, setColor] = useState("#D2BE9AFF")
    const [border, setBorder] = useState(true)
    const value = {
        figure,
        setFigure,
        setColor,
        color,
        border,
        setBorder
    }

    /*****************************
     * RENDER
     *****************************/
    return (
        <BrowserRouter>
            <Context.Provider value={value}>
                <div className="wrapper">
                    <Header/>
                    <Route exact path={"/"} component={Main}/>
                    <Route exact path={"/square"} component={Square}/>
                </div>
            </Context.Provider>
        </BrowserRouter>

    );
}

export default App;
