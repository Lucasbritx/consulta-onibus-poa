import React, { FC } from "react";
import DotLoader from "react-spinners/ClipLoader";

type SpinnerProps = {
    loading: boolean;
}


const Spinner: FC<SpinnerProps> = ({ loading }) => {
    return (
        <DotLoader color={'red'} loading={loading} />
    )
}

export default Spinner;