import React from "react";
import LoaadingGif from '../images/loading.gif'

const Loader = () => {
    return (
        <div className="loader">
            <div className="loader_img">
                <img src={LoaadingGif} alt="" />
            </div>

        </div>
    )
}

export default Loader