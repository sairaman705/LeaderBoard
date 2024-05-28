import React from "react";

const SlippageSelect = ({onChange})=>{
    return(
        <div className="header">
            <div className="row bg-light">
                <div className="col">
                    <h3 className="text-danger">LeaderBoards</h3>
                </div>
                <div className="col">
                    <h3 className="text-right">Slippage Data</h3>
                    <select className="form-control float-right ml-5 w-auto" onChange={onChange}>
                        <option value="0%">0%</option>
                        <option value="0.5%">0.5%</option>
                        <option value="1%">1%</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default SlippageSelect