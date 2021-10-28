import React, {useContext} from 'react';
import {Context} from "../../Context/Context";

const Square = () => {

    const value = useContext(Context)




    /***************
     * RENDER
     ***************/
    return (
        <div className="square__container">
            <div style={{background: `${value.color}`}}
                 className={value.figure === "square"  ? "figure ": "figure figure__circle "}>

            </div>
        </div>
    );
};

export default Square;