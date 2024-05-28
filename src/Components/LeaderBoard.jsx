import React, { useState } from "react";
import { slippageData } from "./datas";
import SlippageSelect from "./SlippageSelect";
import Cards from "./Cards";

function LeaderBoard() {
    const [selectedSlippage, setSelectedSlippage] = useState("0%");
    const [data, setData] = useState(slippageData["0%"]);

    const handleSlippageChange = (e) => {
        const newSlippage = e.target.value;
        setSelectedSlippage(newSlippage);
        setData(slippageData[newSlippage]);
    };

    return (
        <div className="container-fluid mt-4">
            <SlippageSelect onChange={handleSlippageChange} />

            <div className="container-fluid">
                <Cards data={data} />
            </div>
            
        </div>
    );
}

export default LeaderBoard;
