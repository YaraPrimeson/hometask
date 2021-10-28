import React, {useContext, useState} from 'react';
import {Context} from "../../Context/Context";

const Main = () => {
    const value = useContext(Context);


    /**********************
     * HANDLE
     **********************/
    const random = () => {
        const randomColor = "#" + Math.floor(Math.random() * 16000000).toString(16);
        value.setColor(randomColor);
    }
    const onChangeFigure = (e) => {
        value.setFigure(e.target.value);
    }
    const onChangeBorder = () => {
        value.setBorder(!value.border)
    }
    /**********************
     * RENDER
     **********************/
    return (
        <div className="main flex__for__body">
            <h2 className={"main__title"} style={{color: `${value.color}`}}>Current color {value.color}</h2>
            <button className="main__btn" onClick={random}>change color</button>
            <div >
                <input type="radio" onChange={onChangeFigure} checked={value.figure === "square"} value={"square"} name={"figure"}/>square
                <input type="radio" onChange={onChangeFigure} checked={value.figure === "circle"} value={"circle"} name={"figure"}/>circle
            </div>
            <div>
                <input type="checkbox" onChange={onChangeBorder} value={value.border}/> change border
            </div>

        </div>
    );
};

export default Main;